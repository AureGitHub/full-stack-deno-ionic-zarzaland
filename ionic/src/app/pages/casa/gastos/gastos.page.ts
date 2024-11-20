import { Component, OnInit } from '@angular/core';
import {
  BasePage,
  BasePageService,
} from 'app-base-lib';


@Component({
  selector: 'gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage extends BasePage implements OnInit {
  addTipoGasto = false;

  columns = [ 
    { name: 'F', prop: 'fecha', type: 'date', OrderInit: 'DESC'},
    { name: 'Descripción', prop: 'descripcion', type: 'text'},
    { name: 'Importe', prop: 'importe', type: 'number'},
    { name: 'Observaciones', prop: 'observaciones', type: 'text'},
  ];
  

  constructor(
    public override basePageService: BasePageService
  ) {
    super(basePageService);
    this.entityName = 'casa/gasto';
  }

  async ngOnInit() {
    this.Init();

  }

  async handleRefresh(event) {
    event.target.complete();
  }


}
