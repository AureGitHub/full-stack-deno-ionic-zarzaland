import { Component, OnInit } from '@angular/core';
import {
  BasePage,
  MyHttpService,
  SeguridadService,
  UtilService,
  classHttp,
  typeMessage,
} from 'app-base-lib';


@Component({
  selector: 'bolsa',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage extends BasePage implements OnInit {
  addProducto = false;
  lstProductos: any[];
  lstProductosSelected=[];

  constructor(
    public override myHttpService: MyHttpService,
    public override seguridadService: SeguridadService,
    private utilService: UtilService,

  ) {
    super(myHttpService, seguridadService);
    this.entityName = 'casa/compra';
  }

  async ngOnInit() {
    this.Init();
    await this.getProductos();

  }


  async getProductos() {
    try {

      this.lstProductos = [];
      this.isLoading = true;
      const objHttp: classHttp = new classHttp('get', 'casa/compra_producto', null);
      const result = await this.myHttpService.ejecuteURL(objHttp);
      if (result?.data) {
        this.lstProductos = result?.data;
      }

    } catch (error) {
    } finally {
      this.isLoading = false;
    }


  }


  async handleRefresh(event) {
    event.target.complete();
  }

}
