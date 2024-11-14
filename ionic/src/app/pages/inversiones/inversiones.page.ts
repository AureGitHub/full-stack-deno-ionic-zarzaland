import { Component, OnInit } from '@angular/core';
import { BasePage, MyHttpService, MyHttpService_EXEC, SeguridadService,  classHttp } from 'app-base-lib';
import  {menuItems} from './menu'

@Component({
  selector: 'app-inversiones',
  templateUrl: './inversiones.page.html',
  styleUrls: ['./inversiones.page.scss'],
})
export class InversionesPage extends BasePage implements OnInit {


  menuItems = menuItems;


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


