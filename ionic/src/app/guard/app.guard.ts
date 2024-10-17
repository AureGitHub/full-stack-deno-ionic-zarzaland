
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../../../../workspace-lib/dist/app-ionic-base';





@Injectable()
export class AppGuard implements CanActivate {


  constructor(
    private securityService: SeguridadService,
    private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const currentUser = this.securityService.UserGet();

    if (currentUser==-1) {
      this._router.navigate(['/expired']);
      return false;
    }

    if (!currentUser) {
      this._router.navigate(['/login']);
      return false;
    }
    
    // rol del usuario
    if (next.data['app'].some(a => currentUser.app == a)) {
      return true;
    }

    this._router.navigate(['/no-autorizado']);
    return false;
  }

}
