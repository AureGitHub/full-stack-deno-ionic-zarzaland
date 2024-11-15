import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BasePage, MyHttpService, MyHttpService_EXEC, SeguridadService,  classHttp } from 'app-base-lib';


@Component({
  selector: 'add-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage extends BasePage implements OnInit {

  columns = [ { name: 'Descripción', prop: 'descripcion', type: 'text', OrderInit: 'ASC'},];

  
  @Output()  saveEvent = new EventEmitter<boolean>();
  @Output()  deleteEvent = new EventEmitter<boolean>();



  constructor(
    public override  myHttpService: MyHttpService,
    public override  seguridadService: SeguridadService,
    public override myHttpService_EXEC: MyHttpService_EXEC,


  ) {
    super(myHttpService,seguridadService,myHttpService_EXEC);
    this.entityName = 'casa/compra_producto';
  }

  async ngOnInit() {
    this.Init();
  }
  

}

