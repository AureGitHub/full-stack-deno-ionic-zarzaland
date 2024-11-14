import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BasePage, MyHttpService, MyHttpService_EXEC, SeguridadService,  classHttp } from 'app-base-lib';


@Component({
  selector: 'add-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.scss'],
})
export class TiposComponent extends BasePage implements OnInit {

  columns = [ { name: 'Descripción', prop: 'descripcion', type: 'text', OrderInit: 'ASC'},];

  constructor(
    public override  myHttpService: MyHttpService,
    public override  seguridadService: SeguridadService,
    public override myHttpService_EXEC: MyHttpService_EXEC,


  ) {
    super(myHttpService,seguridadService,myHttpService_EXEC);
    this.entityName = 'casa/gasto_tipo';
  }

  async ngOnInit() {
    this.Init();
  }
  

}


