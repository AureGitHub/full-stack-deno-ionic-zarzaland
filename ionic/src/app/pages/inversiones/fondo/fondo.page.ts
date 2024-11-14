import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BasePage,
  EditorEntityComponent,
  MyHttpService,
  MyHttpService_EXEC,
  SeguridadService,
  UtilService,
  classHttp,
  typeMessage,
} from 'app-base-lib';


@Component({
  selector: 'fondo',
  templateUrl: './fondo.page.html',
  styleUrls: ['./fondo.page.scss'],
})
export class FondoPage extends BasePage implements OnInit {

  addEmpresa = false;

  columns = [ 
    { name: 'Donde', prop: 'descripcion', type: 'text'},
    { name: 'Fi', prop: 'fechainicio', type: 'date', OrderInit: 'DESC'},
    { name: 'Ff', prop: 'fechafin', type: 'date', OrderInit: 'DESC'},
    { name: 'Importe', prop: 'importe', type: 'number'},
    { name: 'Beneficios', prop: 'beneficios', type: 'number'},    
  ];
  


  constructor(
    public override myHttpService: MyHttpService,
    public override seguridadService: SeguridadService,
    private utilService: UtilService,
    public override myHttpService_EXEC: MyHttpService_EXEC,


  ) {
    super(myHttpService, seguridadService,myHttpService_EXEC);
    this.entityName = 'bolsa/fondo';
  }

  async ngOnInit() {
    this.Init();

  }

  async handleRefresh(event) {
    event.target.complete();
  }

}
