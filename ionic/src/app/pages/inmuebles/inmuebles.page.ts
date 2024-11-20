import { Component, OnInit } from '@angular/core';
import { BasePage, BasePageService } from 'app-base-lib';


@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.page.html',
  styleUrls: ['./inmuebles.page.scss'],
})
export class InmueblesPage extends BasePage implements OnInit {



  constructor(
    public override basePageService: BasePageService
  ) {
    super(basePageService);
    this.entityName = 'UserXMovimiento';
  }

  async ngOnInit() {

  }

}


