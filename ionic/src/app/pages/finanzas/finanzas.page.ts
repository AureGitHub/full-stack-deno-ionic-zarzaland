import { Component, OnInit } from '@angular/core';
import { BasePage, BasePageService } from 'app-base-lib';
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
    public override basePageService: BasePageService
  ) {
    super(basePageService);
    this.entityName = 'accion';
  }
  async ngOnInit() {
  }

}


