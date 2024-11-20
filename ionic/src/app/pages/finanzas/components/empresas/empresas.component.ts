import { Component, OnInit } from '@angular/core';
import { BasePage, BasePageService } from 'app-base-lib';


@Component({
  selector: 'gestor-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
})
export class EmpresasComponent extends BasePage implements OnInit {

  columns = [ { name: 'Descripción', prop: 'descripcion', type: 'text', OrderInit: 'ASC'},];

  constructor(
    public override basePageService: BasePageService

  ) {
    super(basePageService);
    this.entityName = 'finanzas/empresa';
  }

  async ngOnInit() {
    this.Init();
  }

}


