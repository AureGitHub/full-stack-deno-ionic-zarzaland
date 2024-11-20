import { Component, OnInit } from '@angular/core';
import { BasePage, BasePageService } from 'app-base-lib';
import  {menuItems} from './menu'

@Component({
  selector: 'app-casa',
  templateUrl: './casa.page.html',
  styleUrls: ['./casa.page.scss'],
})
export class CasaPage extends BasePage implements OnInit {


  menuItems = menuItems;


  constructor(
    public override basePageService: BasePageService
  ) {
    super(basePageService);
    this.entityName = 'accion';
  }

  async ngOnInit() {
    
  }

}


