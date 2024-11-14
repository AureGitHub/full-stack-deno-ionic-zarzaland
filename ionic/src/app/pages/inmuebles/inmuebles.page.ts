import { Component, OnInit } from '@angular/core';
import { BasePage, MyHttpService, MyHttpService_EXEC, SeguridadService,  classHttp } from 'app-base-lib';


@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.page.html',
  styleUrls: ['./inmuebles.page.scss'],
})
export class InmueblesPage extends BasePage implements OnInit {



  constructor(
    public override  myHttpService: MyHttpService,
    public override  seguridadService: SeguridadService,
    public override myHttpService_EXEC: MyHttpService_EXEC,


  ) {
    super(myHttpService,seguridadService, myHttpService_EXEC);
    this.entityName = 'UserXMovimiento';
  }

  async ngOnInit() {

  }

}


