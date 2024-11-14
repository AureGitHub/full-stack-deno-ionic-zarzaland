import { Component, OnInit } from '@angular/core';
import {
  BasePage,
  MyHttpService,
  MyHttpService_EXEC,
  SeguridadService,
  UtilService,
  classHttp,
  typeMessage,
} from 'app-base-lib';


@Component({
  selector: 'gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage extends BasePage implements OnInit {
  addTipoGasto = false;

  columns = [ 
    { name: 'F', prop: 'fecha', type: 'date', OrderInit: 'DESC'},
    { name: 'Descripción', prop: 'descripcion', type: 'text'},
    { name: 'Importe', prop: 'importe', type: 'number'},
    { name: 'Observaciones', prop: 'observaciones', type: 'text'},
  ];
  

  constructor(
    public override myHttpService: MyHttpService,
    public override seguridadService: SeguridadService,
    public override myHttpService_EXEC: MyHttpService_EXEC,
    private utilService: UtilService,


  ) {
    super(myHttpService, seguridadService,myHttpService_EXEC);
    this.entityName = 'casa/gasto';
  }

  async ngOnInit() {
    this.Init();

  }

  async handleRefresh(event) {
    event.target.complete();
  }


}
