import { Component, OnInit } from '@angular/core';
import { BasePage, MyHttpService, SeguridadService,  classHttp } from 'app-base-lib';


@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.page.html',
  styleUrls: ['./movimiento.page.scss'],
})
export class MovimientoPage extends BasePage implements OnInit {

  onLoadDataEmiter($event: any) {
  }

  columns = [];

  userIdSelected: any;
  lstUser: any[] = [];

  constructor(
    public override  myHttpService: MyHttpService,
    public override  seguridadService: SeguridadService,

  ) {
    super(myHttpService,seguridadService);
    this.entityName = 'UserXMovimiento';
  }

  async ngOnInit() {
    this.Init();
    this.userIdSelected = this.user.id;

    this.lstUser = await this.getUsers();

    this.columns = [
      { name: 'F', prop: 'fecha', type: 'date', OrderInit: 'DESC' },
      { name: 'Importe', prop: 'importe', type: 'number' },
      { name: 'Tipo', prop: 'tipo', type: 'text' },
      { name: 'user', prop: 'userid', type: 'number', filterInit: ` ux."userid" = ${this.userIdSelected}`, hide: true },

    ];

    this.getTableRefresh();

   


  }



  selectUserEvent(){

    this.columns = [
      { name: 'F', prop: 'fecha', type: 'date', OrderInit: 'DESC' },
      { name: 'Importe', prop: 'importe', type: 'number' },
      { name: 'Tipo', prop: 'tipo', type: 'text' },
      { name: 'user', prop: 'userid', type: 'number', filterInit: ` ux."userid" = ${this.userIdSelected}`, hide: true },

    ];

    this.getTableRefresh();
  }
}


