import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BasePage,
  BasePageService
} from 'app-base-lib';


@Component({
  selector: 'fondo',
  templateUrl: './fondo.page.html',
  styleUrls: ['./fondo.page.scss'],
})
export class FondoPage extends BasePage implements OnInit {

  addEmpresa = false;

  columns = [ 
    { name: 'Donde', prop: 'descripcion', type: 'text'},
    { name: 'Fi', prop: 'fechainicio', type: 'date', OrderInit: 'DESC'},
    { name: 'Ff', prop: 'fechafin', type: 'date', OrderInit: 'DESC'},
    { name: 'Importe', prop: 'importe', type: 'number'},
    { name: 'Beneficios', prop: 'beneficios', type: 'number'},    
  ];
  


  constructor(
    public override basePageService: BasePageService
  ) {
    super(basePageService);
    this.entityName = 'finanzas/fondo';
  }

  async ngOnInit() {
    this.Init();

  }

  async handleRefresh(event) {
    event.target.complete();
  }

}
