import { Component, OnInit } from '@angular/core';
import {
  BasePage,
  BasePageService,
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
    public override basePageService: BasePageService
  ) {
    super(basePageService);
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
      let objHttp: classHttp = new classHttp('get', 'casa/compra_producto', null);
      let result = await this.myHttpService.ejecuteURL(objHttp);
      if (result?.data) {
        this.lstProductos = result?.data;
      }

      objHttp = new classHttp('get', 'casa/compra_producto_selected', null);
      result = await this.myHttpService.ejecuteURL(objHttp);
      if (result?.data) {
        this.lstProductosSelected = result?.data;
      }


      this.lstProductos = this.lstProductos.filter(a=> !this.lstProductosSelected.some(b=> b.id==a.id));



    } catch (error) {
    } finally {
      this.isLoading = false;
    }


  }


  async selectProducto(producto){

    const id=producto.id;
    const result =await this.myHttpService_EXEC.Save('post','casa/compra_producto_selected',{id},this.pk)
    if(!result){
      this.utilService.message(typeMessage.danger,'No se ha podido añadir el producto');
      return;
    }
    
    this.lstProductos=this.lstProductos.filter(a=>a.id!=producto.id);    
    this.lstProductosSelected.push(producto);      
    this.lstProductosSelected=this.lstProductosSelected.sort(this.compare);


    

  }

  async unselectProducto(producto){

    const compra_productoid=producto.id;
    const result =await this.myHttpService_EXEC.Save('delete','casa/compra_producto_selected',{compra_productoid},'compra_productoid');

    if(!result){
      this.utilService.message(typeMessage.danger,'No se ha podido borrar el producto');
      return;
    }


    this.lstProductosSelected=this.lstProductosSelected.filter(a=>a.id!=producto.id);    
    this.lstProductos.push(producto);

    this.lstProductos=this.lstProductos.sort(this.compare);

  }

  compare( a, b ) {
    if ( a.descripcion < b.descripcion ){
      return -1;
    }
    if ( a.descripcion > b.descripcion ){
      return 1;
    }
    return 0;
  }

  async handleRefresh(event) {
    await this.getProductos();
    event.target.complete();
  }

  saveEventProducto(event){

    //quito el producto (si está)
     //lo añado
    //ordeno
    if(this.lstProductosSelected.some(a=> a.id==event.id)){
      this.lstProductosSelected=this.lstProductosSelected.filter(a=> a.id!=event.id);
      this.lstProductosSelected.push(event);
      this.lstProductosSelected=this.lstProductosSelected.sort(this.compare);
    }
    else{
      this.lstProductos=this.lstProductos.filter(a=> a.id!=event.id);
      this.lstProductos.push(event);
      this.lstProductos=this.lstProductos.sort(this.compare);
    }
  }

  deleteEventProducto(event){
    this.lstProductos=this.lstProductos.filter(a=> a.id!=event.id);
  }

}
