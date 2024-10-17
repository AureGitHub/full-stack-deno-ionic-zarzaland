import { Component, OnInit } from '@angular/core';
import { BasePage, MyHttpService, SeguridadService,  classHttp } from 'app-base-lib';


@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.page.html',
  styleUrls: ['./auditoria.page.scss'],
})
export class AuditoriaPage extends BasePage implements OnInit {

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
    this.entityName = 'Auditoria';
  }

  async ngOnInit() {
    this.Init();
    this.columns = [
      { name: 'F', prop: 'fecha', type: 'datetime', OrderInit: 'DESC' },
      { name: 'Nombre', prop: 'nombre' },
      { name: 'tipoid', prop: 'tipoid', hide: true },
      { name: 'Tipo', prop: 'tipo', type: 'text' }

    ];

    this.getTableRefresh();

   


  }


}


