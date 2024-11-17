import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BasePage,
  EditorEntityComponent,
  MyHttpService,
  MyHttpService_EXEC,
  SeguridadService,
  UtilService,
  classHttp,
  typeMessage,
} from 'app-base-lib';


@Component({
  selector: 'estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage extends BasePage implements OnInit {


  addEmpresa = false;


  columnsFondosActivos = [

    { name: 'e', prop: 'ab', type: 'text' },
    { name: 'Fi', prop: 'fechainicio', type: 'date' },
    { name: 'Ff', prop: 'fechafin', type: 'date' },
    { name: 'i', prop: 'interes', type: 'number' },
    { name: 'i', prop: 'importe', type: 'number' },
  ];

  columnsWithout = [

    { name: 'F', prop: 'fecha', type: 'text' },
    { name: 'f', prop: 'fondo', type: 'number', decimalNamber: '1.2-2' },
    { name: 'l', prop: 'letra', type: 'number', decimalNamber: '1.2-2' },
    { name: 'b', prop: 'bolsa', type: 'number', decimalNamber: '1.2-2' },
    { name: 't', prop: 'total', type: 'number', decimalNamber: '1.2-2' },
  ];

  columns = [

    { name: 'E', prop: 'em', type: 'text' },
    { name: 'F', prop: 'fecha', type: 'text' },
    { name: 'B', prop: 'importe', type: 'number', decimalNamber: '1.2-2' },
  ];



  resultWithEmpresa: any[] = [];
  resultWithoutEmpresa: any[] = []; 
  resultFondosActivos: any[] = [];
  resultWithEmpresaTMP: any[] = [];


  constructor(
    public override myHttpService: MyHttpService,
    public override seguridadService: SeguridadService,
    private utilService: UtilService,
    public override myHttpService_EXEC: MyHttpService_EXEC,


  ) {
    super(myHttpService, seguridadService, myHttpService_EXEC);
    this.entityName = 'finanzas/estadisticas';
  }

  async ngOnInit() {
    this.Init();
    this.getEstadisticas();

  }
  async handleRefresh(event) {
    await this.getEstadisticas();
    event.target.complete();
  }

  async getEstadisticas() {
    try {
      this.isLoading = true;
      const objHttp: classHttp = new classHttp('get', this.entityName, null);
      const result = await this.myHttpService.ejecuteURL(objHttp);
      if (result) {
        this.resultWithoutEmpresa = result?.resultWithoutEmpresa;
        this.resultFondosActivos = result?.resultFondosActivos;


        this.resultWithEmpresaTMP = result?.resultWithEmpresa;


      }

    } catch (error) {
    } finally {
      this.isLoading = false;
    }


  }

  selectingWithoutEmpresa(rowSelected: any) {
    this.resultWithEmpresa = this.resultWithEmpresaTMP
    .filter(a=> a.anno == rowSelected.anno && a.mes == rowSelected.mes);
    }




}
