import { Component, OnInit } from '@angular/core';
import {
  BasePage,
  BasePageService,
} from 'app-base-lib';


@Component({
  selector: 'catastro',
  templateUrl: './catastro.page.html',
  styleUrls: ['./catastro.page.scss'],
})
export class CatastroPage extends BasePage implements OnInit {

  columns = [ 
    { name: 'Descripción', prop: 'descripcion', type: 'text'}, 
    { name: 'Dirección', prop: 'direccion', type: 'text'},    
     { name: 's. parcela', prop: 'superficieparcela', type: 'number'},    
     { name: 'v. catastral', prop: 'valorcatastral', type: 'number'},    
  ];
  
  constructor(
    public override basePageService: BasePageService
  ) {
    super(basePageService);
    this.entityName = 'inmueble/catastro';
  }

  async ngOnInit() {
    this.Init();
  }

  async handleRefresh(event) {
    event.target.complete();
  }

}
