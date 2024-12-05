import { Component, OnInit } from '@angular/core';
import {
  BasePage,
  BasePageService,
  classHttp
} from 'app-base-lib';


@Component({
  selector: 'estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage extends BasePage implements OnInit {



  addEmpresa = false;

  lstItemEmpresas = [];

  Empresaselected : any;


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

  buttonsTab = {};
  resultComprasVentas: any;
  lstItemEmpresasTMP: any;
  resultComprasVentasTMP: any;


  constructor(
    public override basePageService: BasePageService
  ) {
    super(basePageService);
    this.entityName = 'finanzas/estadisticas';
  }

  async ngOnInit() {
    this.Init();
    this.buttonTab('resumenxmes');


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
        this.resultComprasVentasTMP = result?.resultComprasVentas;
        this.resultComprasVentas = result?.resultComprasVentas;
      }

    } catch (error) {
    } finally {
      this.isLoading = false;
    }


  }

  async selectingWithoutEmpresa(rowSelected: any) {
    const param = { anno: rowSelected.anno, mes: rowSelected.mes };
    const objHttp: classHttp = new classHttp('get', this.entityName, null, 'getDetalle', null, param);
    const result = await this.myHttpService.ejecuteURL(objHttp);
    this.resultWithEmpresa = result?.resultWithEmpresa;
  }


  async buttonTab(cual) {

    for(const pp in this.buttonsTab){
      this.buttonsTab[pp] =false;
    }

    if(!this.buttonsTab[cual]){
      this.buttonsTab[cual] =true;
    }
    this.buttonsTab[cual] =true;

    //mejorarlo... si no he accedido al servidor, acceder
    // solo hay que traerse los datos del tab activo
    switch(cual){
      case 'compravsventas':
        await this.getlstItemEmpresas();
        
        break;
        default:    
        this.getEstadisticas();
        break;
    }

  }
  async getlstItemEmpresas() {
    this.lstItemEmpresas = [];

    const objHttp: classHttp = new classHttp('get', 'finanzas/empresa', null);
    const result = await this.myHttpService.ejecuteURL(objHttp);
    this.lstItemEmpresas = result?.data;



  }


  selectedEmpresa(){
    this.resultComprasVentas =  this.resultComprasVentasTMP.filter(a=> a.empresaid==this.Empresaselected);
  }


}
