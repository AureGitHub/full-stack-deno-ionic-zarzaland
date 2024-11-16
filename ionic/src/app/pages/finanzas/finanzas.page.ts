import { Component, OnInit } from '@angular/core';
import { BasePage, MyHttpService, MyHttpService_EXEC, SeguridadService,  classHttp } from 'app-base-lib';
import  {menuItems} from './menu'

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.page.html',
  styleUrls: ['./finanzas.page.scss'],
})
export class FinanzasPage extends BasePage implements OnInit {


  menuItems = menuItems;

  addEmpresa=false;


  constructor(
    public override  myHttpService: MyHttpService,
    public override  seguridadService: SeguridadService,
    public override myHttpService_EXEC: MyHttpService_EXEC,


  ) {
    super(myHttpService,seguridadService,myHttpService_EXEC);
    this.entityName = 'accion';
  }

  async ngOnInit() {
    
  }

}


