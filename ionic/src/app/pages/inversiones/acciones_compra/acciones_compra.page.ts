import { Component, OnInit } from '@angular/core';
import {
  BasePage,
  MyHttpService,
  SeguridadService,
  classHttp,
} from 'app-base-lib';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-acciones_compra',
  templateUrl: './acciones_compra.page.html',
  styleUrls: ['./acciones_compra.page.scss'],
})
export class AccionesCompraPage extends BasePage implements OnInit {
  movimientos: TreeNode[];

  columns = [
    { name: 'F', prop: 'fecha', type: 'date', OrderInit: 'DESC' },
    { name: 'N', prop: 'descripcion', type: 'text' },
    { name: 'A', prop: 'acciones', type: 'number' },
    { name: 'P', prop: 'precio', type: 'number' },
    { name: 'T', prop: 'total', type: 'number' },
  ];

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
      let movTmp = [];
      this.isLoading = true;
      const objHttp: classHttp = new classHttp('get', this.entityName, null);
      const result = await this.myHttpService.ejecuteURL(objHttp);
      if (result?.data) {
        const lstMov = result?.data.sort((a, b) => {
          return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
        });

        let key = 0;

        lstMov.forEach((mov) => {          
          movTmp.push({
            key,
            type : 'compra',
            label: `${mov.descripcion}`,
            data: mov,
            children: [
              { label: 'Archivo 1-1', data: 'File 1-1' },
              { label: 'Archivo 1-2', data: 'File 1-2' },
            ],
          });
          key++;
        });
      }
      this.movimientos = this.movimientos.concat(movTmp);
      console.log(this.movimientos);
      const a = '';
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
}
