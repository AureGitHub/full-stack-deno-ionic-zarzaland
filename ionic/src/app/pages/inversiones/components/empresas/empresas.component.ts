import { Component, OnInit } from '@angular/core';
import { BasePage, MyHttpService, MyHttpService_EXEC, SeguridadService,  classHttp } from 'app-base-lib';


@Component({
  selector: 'gestor-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
})
export class EmpresasComponent extends BasePage implements OnInit {

  columns = [ { name: 'Descripción', prop: 'descripcion', type: 'text', OrderInit: 'ASC'},];

  constructor(
    public override  myHttpService: MyHttpService,
    public override  seguridadService: SeguridadService,
    public override myHttpService_EXEC: MyHttpService_EXEC,


  ) {
    super(myHttpService,seguridadService,myHttpService_EXEC);
    this.entityName = 'bolsa/empresa';
  }

  async ngOnInit() {
    this.Init();
  }

}


