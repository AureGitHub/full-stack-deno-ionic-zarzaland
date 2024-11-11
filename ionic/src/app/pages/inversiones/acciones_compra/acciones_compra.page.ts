import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BasePage,
  EditorEntityComponent,
  MyHttpService,
  SeguridadService,
  classHttp,
} from 'app-base-lib';


@Component({
  selector: 'app-acciones_compra',
  templateUrl: './acciones_compra.page.html',
  styleUrls: ['./acciones_compra.page.scss'],
})
export class AccionesCompraPage extends BasePage implements OnInit {
  movimientos: any[];

  columns = [
    { name: 'F', prop: 'fecha', type: 'date', OrderInit: 'DESC' },
    { name: 'N', prop: 'descripcion', type: 'text' },
    { name: 'A', prop: 'acciones', type: 'number' },
    { name: 'P', prop: 'precio', type: 'number' },
    { name: 'T', prop: 'total', type: 'number' },
  ];
SelectedCompraId: any;
SelectedVentaId: any;
selectedNode: any;

entityNameCompra = 'accion_compra';
entityNameVenta = 'accion_venta';

isOpenModal=false;

@ViewChild('venta') editorEntityComponent :EditorEntityComponent ;
entityVentaInitialValues: any;

  constructor(
    public override myHttpService: MyHttpService,
    public override seguridadService: SeguridadService
  ) {
    super(myHttpService, seguridadService);
    this.entityName = 'accion_compra';
  }

  async ngOnInit() {
    this.Init();

    await this.getMovimientos();
  }

  formatFecha(fecha) {
    const value = new Date(fecha);
    return `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`;
  }

  async getMovimientos() {
    try {
      this.movimientos = [];
      this.isLoading = true;
      const objHttp: classHttp = new classHttp('get', this.entityName, null);
      const result = await this.myHttpService.ejecuteURL(objHttp);
      if (result?.data) {
        const lstMov = result?.data.sort((a, b) => {
          return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
        });
        this.movimientos = this.movimientos.concat(lstMov);
        console.log(this.movimientos);

      }
      
    } catch (error) {
    } finally {
      this.isLoading = false;
    }

    // this.movimientos = [
    //   {
    //     label: "Carpeta 1",
    //     data: "Folder 1",
    //     children: [
    //       { label: "Archivo 1-1", data: "File 1-1" },
    //       { label: "Archivo 1-2", data: "File 1-2" }
    //     ]
    //   },
    //   {
    //     label: "Carpeta 2",
    //     data: "Folder 2",
    //     children: [
    //       { label: "Archivo 2-1", data: "File 2-1" },
    //       {
    //         label: "Carpeta 2-2",
    //         data: "Folder 2-2",
    //         children: [
    //           { label: "Archivo 2-2-1", data: "File 2-2-1" },
    //           { label: "Archivo 2-2-2", data: "File 2-2-2" }
    //         ]
    //       }
    //     ]
    //   }
    // ];
  }

  addVenta(accion_compraid, acciones){

    this.entityVentaInitialValues = {accion_compraid,acciones};
    this.editorEntityComponent.management(0);
  }
}
