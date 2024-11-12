import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BasePage,
  EditorEntityComponent,
  MyHttpService,
  SeguridadService,
  UtilService,
  classHttp,
  typeMessage,
} from 'app-base-lib';


@Component({
  selector: 'cartera',
  templateUrl: './cartera.page.html',
  styleUrls: ['./cartera.page.scss'],
})
export class CarteraPage extends BasePage implements OnInit {
  lstCartera: any[];

  beneficios=0;

  selectedNode: any;

  entityNameCompra = 'accion_compra';
  entityNameVenta = 'accion_venta';

  isOpenModal = false;

  @ViewChild('editorEntity') editorEntityComponent: EditorEntityComponent;
  inversionActual=0;



  constructor(
    public override myHttpService: MyHttpService,
    public override seguridadService: SeguridadService,
    private utilService: UtilService,

  ) {
    super(myHttpService, seguridadService);
    this.entityName = 'bolsa/cartera';
  }

  async ngOnInit() {
    this.Init();

    await this.getCartera();
  }

  formatFecha(fecha) {
    const value = new Date(fecha);
    return `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`;
  }

  async getCartera() {
    try {
      this.lstCartera = [];
      this.isLoading = true;
      const objHttp: classHttp = new classHttp('get', this.entityName, null);
      const result = await this.myHttpService.ejecuteURL(objHttp);
      if (result?.data) {
        const lstMov = result?.data.sort((a, b) => {
          return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
        });

        this.lstCartera = this.lstCartera.concat(lstMov);


        this.lstCartera.forEach(cartera => {
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

    if (entityName.includes("venta") && entityid == 0) {
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

  // optiene las compras y las ventas
  async getOperaciones(cartera) {

    //get compras

    const param = cartera.id.toString();

    let objHttp: classHttp = new classHttp('get', 'bolsa/compra', null, 'ByCarteraID', null, param);
    try {
      let resp = await this.myHttpService.ejecuteURL(objHttp);
      cartera['lstCompras'] = resp?.data;


      objHttp = new classHttp('get', 'bolsa/venta', null, 'ByCarteraID', null, param);
      resp = await this.myHttpService.ejecuteURL(objHttp);
      cartera['lstVentas'] = resp?.data;


    }
    catch (ex) {
      this.utilService.message(typeMessage.danger, ex.message);
    }
    finally {
    }


  }

}
