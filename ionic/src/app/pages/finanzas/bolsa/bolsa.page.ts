import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BasePage,
  BasePageService,
  EditorEntityComponent,
  classHttp,
  typeMessage,
} from 'app-base-lib';


@Component({
  selector: 'bolsa',
  templateUrl: './bolsa.page.html',
  styleUrls: ['./bolsa.page.scss'],
})
export class BolsaPage extends BasePage implements OnInit {
  lstCartera: any[];

  lstTransacciones = ['venta', 'compra', 'dividendo'];

  beneficios=0;

  selectedNode: any;

  entityNameCompra = 'accion_compra';
  entityNameVenta = 'accion_venta';

  isOpenModal = false;

  @ViewChild('editorEntity') editorEntityComponent: EditorEntityComponent;
  inversionActual=0;
  addEmpresa=false;



  constructor(
    public override basePageService: BasePageService

  ) {
    super(basePageService);
    this.entityName = 'finanzas/cartera';
  }

  async ngOnInit() {
    this.Init();

    await this.getCartera();
  }


  async handleRefresh(event) {
    await this.getCartera();
    event.target.complete();
  }


  formatFecha(fecha) {
    const value = new Date(fecha);
    return `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`;
  }

  async getCartera() {
    try {
      this.beneficios=0;
      this.inversionActual=0;
      this.lstCartera = [];
      this.isLoading = true;
      const objHttp: classHttp = new classHttp('get', this.entityName, null);
      const result = await this.myHttpService.ejecuteURL(objHttp);
      if (result?.data) {
        this.lstCartera =  result?.data;
        this.lstCartera.forEach(cartera => {
          cartera['expanded']=false;
          if (parseInt(cartera.acciones) == 0) {
            this.beneficios += parseFloat(cartera.beneficios);
          }
          else{
            this.inversionActual += parseFloat(cartera.beneficios);
          }
        })

      }

    } catch (error) {
    } finally {
      this.isLoading = false;
    }


  }


  management(cartera: any, entityName_: string, entityid) {
    const entityName = entityName_;
    const entityInitialValues = { carteraid: cartera.id };

    if ((entityName.includes("venta") || entityName.includes("dividendo")) && entityid == 0) {
      //alta de venta...copio todas las acciones
      entityInitialValues['acciones'] = cartera.acciones;
    }

    this.editorEntityComponent.management(entityid, { entityName, entityInitialValues });
  }


  managementCartera(entity: string, carteraid: any) {

    const entityName = entity;
    const entityInitialValues = {};
    this.editorEntityComponent.management(carteraid, { entityName, entityInitialValues });
  }


  async expanded(cartera){
    cartera['expanded']=!cartera['expanded'];
    if(cartera['expanded']){
      this.getTransacciones(cartera);
    }
    else{
      cartera[`lstTransacciones`] = null;
    }
    
  }
  
  


  async getTransacciones(cartera) {

    //compra

    cartera[`loading`]=true;

    const param = cartera.id.toString();

    let objHttp: classHttp = new classHttp('get', `finanzas/cartera`, null, 'getTransacciones', null, param);
    try {
      let resp = await this.myHttpService.ejecuteURL(objHttp);
      cartera[`lstTransacciones`] = resp?.data;
    }
    catch (ex) {
      this.utilService.message(typeMessage.danger, ex.message);
    }
    finally {
      cartera[`loading`]=false;
    }

  }





}
