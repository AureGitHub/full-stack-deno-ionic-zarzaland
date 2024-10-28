import { Component, OnInit } from '@angular/core';
import { BasePage, MyHttpService, SeguridadService,  classHttp } from '@aure-org/app-ionic-base-lib';


@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.page.html',
  styleUrls: ['./inmuebles.page.scss'],
})
export class InmueblesPage extends BasePage implements OnInit {



  constructor(
    public override  myHttpService: MyHttpService,
    public override  seguridadService: SeguridadService,

  ) {
    super(myHttpService,seguridadService);
    this.entityName = 'UserXMovimiento';
  }

  async ngOnInit() {

  }

}


