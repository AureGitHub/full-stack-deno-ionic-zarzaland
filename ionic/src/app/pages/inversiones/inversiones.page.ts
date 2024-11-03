import { Component, OnInit } from '@angular/core';
import { BasePage, MyHttpService, SeguridadService,  classHttp } from 'app-base-lib';
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

  ) {
    super(myHttpService,seguridadService);
    this.entityName = 'accion';
  }

  async ngOnInit() {

  }

}


