import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RolGuard } from 'app-base-lib';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },


  {
    path: 'login',
    loadChildren: () => import( 'app-base-lib').then(m => m.LoginPageModule)
  },

  {
    path: 'forgot-password',
    loadChildren: () => import( 'app-base-lib').then(m => m.ForgotPasswordModule)
  },

  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then( m => m.UsersPagePageModule), canActivate: [RolGuard]
  },

  {
    path: 'bizum',
    loadChildren: () => import('./pages/bizum/bizum.module').then( m => m.BizumPagePageModule), canActivate: [RolGuard]
  },

  {
    path: 'apuesta',
    loadChildren: () => import('./pages/apuesta/apuesta.module').then( m => m.ApuestaPagePageModule), canActivate: [RolGuard]
  },

  {
    path: 'movimiento',
    loadChildren: () => import('./pages/movimiento/movimiento.module').then( m => m.MovimientoPagePageModule), canActivate: [RolGuard]
  },


  {
    path: 'administracion',
    loadChildren: () => import('./pages/administracion/administracion.module').then( m => m.AdministracionPageModule), canActivate: [RolGuard]
  },

  {
    path: 'auditoria',
    loadChildren: () => import('./pages/auditoria/auditoria.module').then( m => m.AuditoriaPagePageModule), canActivate: [RolGuard]
  },

  {
    path: '**',
    loadChildren: () => import( 'app-base-lib').then(m => m.NotFoundPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,  useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }