import { Component, OnInit } from '@angular/core';
import { BasePage, MyHttpService, SeguridadService,  classHttp } from 'app-base-lib';


@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.page.html',
  styleUrls: ['./acciones.page.scss'],
})
export class AccionesPage extends BasePage implements OnInit {

  columns = [ { name: 'Descripción', prop: 'descripcion', type: 'text', OrderInit: 'ASC'},];

  constructor(
    public override  myHttpService: MyHttpService,
    public override  seguridadService: SeguridadService,

  ) {
    super(myHttpService,seguridadService);
    this.entityName = 'accion';
  }

  async ngOnInit() {
    this.Init();
  }

}


