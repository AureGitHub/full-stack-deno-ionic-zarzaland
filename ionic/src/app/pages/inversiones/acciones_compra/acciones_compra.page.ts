import { Component, OnInit } from '@angular/core';
import { BasePage, MyHttpService, SeguridadService,  classHttp } from 'app-base-lib';


@Component({
  selector: 'app-acciones_compra',
  templateUrl: './acciones_compra.page.html',
  styleUrls: ['./acciones_compra.page.scss'],
})
export class AccionesCompraPage extends BasePage implements OnInit {

  columns = [ 
    { name: 'F', prop: 'fecha', type: 'date', OrderInit: 'DESC'},
    { name: 'N', prop: 'descripcion', type: 'text'},
    { name: 'A', prop: 'acciones', type: 'number'},
    { name: 'P', prop: 'precio', type: 'number'},
    { name: 'T', prop: 'total', type: 'number'},
      
  ];

  constructor(
    public override  myHttpService: MyHttpService,
    public override  seguridadService: SeguridadService,

  ) {
    super(myHttpService,seguridadService);
    this.entityName = 'accion_compra';
  }

  async ngOnInit() {
    this.Init();
  }

}


