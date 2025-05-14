import { Component, OnInit } from '@angular/core';
import {
  BasePage,
  BasePageService,
  classHttp,
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
  lstCatastro: any[];
  lstCatastroVer: any[];
urbano=false;
rustico=true;
felipe: any;
  
  constructor(
    public override basePageService: BasePageService
  ) {
    super(basePageService);
    this.entityName = 'inmueble/catastro';
  }

  async ngOnInit() {
    this.Init();
    await this.getCatastro();
  }

  async handleRefresh(event) {
    await this.getCatastro();
    event.target.complete();
  }


  async getCatastro() {
    try {
      this.lstCatastro = [];
      this.isLoading = true;
      const objHttp: classHttp = new classHttp('get', this.entityName, null);
      const result = await this.myHttpService.ejecuteURL(objHttp);
      if (result?.data) {
        this.lstCatastro =  result?.data;

        this.handleChange();

      }

    } catch (error) {
    } finally {
      this.isLoading = false;
    }


  }


  handleChange() {
    this.lstCatastroVer = [];

    this.lstCatastro.forEach(item => {
      if(this.urbano && item.catastrotipoid==1){
        this.lstCatastroVer.push(item);
      }
      if(this.rustico && item.catastrotipoid==2){
        this.lstCatastroVer.push(item);
      }
    })

    if(this.felipe){
      this.lstCatastroVer = this.lstCatastroVer.filter(a=> a.felipe);
    }

    this.lstCatastroVer =  this.lstCatastroVer.sort((a,b)=>a.catastrotipoid - b.catastrotipoid)
  }

}
