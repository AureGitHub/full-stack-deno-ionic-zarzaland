import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BasePage, MyHttpService, SeguridadService,  UtilService,  classHttp, typeMessage } from 'app-base-lib';


@Component({
  selector: 'add-venta',
  templateUrl: './add-venta.page.html',
  styleUrls: ['./add-venta.page.scss'],
})
export class AddVentaPage  implements OnInit {

  isOpenModal = false;

  @Input() set  isOpen (value){
    this.isOpenModal = value;
    if(value){
      this.getEmpresas();
    }

  }
  
  @Output() CancelEvent = new EventEmitter<true>();

  formGroup: FormGroup;
  isSaving = false;
  isLoadingEmpresas= false;
  empresasOK = false;
  lstEmpresas : any[] = [];

  isLoadingCompras  = false;
  lstCompras: any[] = [];
  lstComprasSelected: any[] = [];


  constructor(
    private myHttpService: MyHttpService,
    private utilService: UtilService,
  ) {
    
  }

  async ngOnInit() { 

    this.formGroup = new FormGroup({
      empresaid: new FormControl(''),
      comprasid: new FormControl(''),
    });
  }

  async getEmpresas(){
    this.isLoadingEmpresas= true;

    this.lstEmpresas = [];

    const objPagFilterOrder = {
      pagination: null,
      columns: [
        { name: 'id', prop: 'id', type: 'number' },
        { name: 'descripcion', prop: 'descripcion', type: 'text', OrderInit: 'DESC'},
      ],
      mode: 'C'
    };


    const objHttp: classHttp = new classHttp('get', 'empresa', objPagFilterOrder);
    try{
      const resp = await this.myHttpService.ejecuteURL(objHttp);
      this.lstEmpresas = resp?.data;
      this.empresasOK=true;
      
      
    }
    catch(ex){
      this.utilService.message(typeMessage.danger,ex.message);
      this.empresasOK=false;
    }
    finally{
      this.isLoadingEmpresas= false;
    }
    




  }

  cancelar() {
    this.isOpenModal = false;
    this.CancelEvent.emit(true);
  }

  async onSubmit() {

  }

  
  select_empresa(){

    if(this.formGroup.controls['empresaid'].value){
      this.getCompras(this.formGroup.controls['empresaid'].value);

    }

    
  }
  async getCompras(empresaid: any) {
    this.isLoadingCompras= true;

    this.lstCompras = [];

    const protocol = 'get';
    const param = empresaid.toString();    
    const objHttp: classHttp = new classHttp(protocol,'accion_compra', null,'comprasByEmpresaId' , null, param);

    try{
      const resp = await this.myHttpService.ejecuteURL(objHttp);
      this.lstCompras = resp?.data;
      this.empresasOK=true;
      
      
    }
    catch(ex){
      this.utilService.message(typeMessage.danger,ex.message);
    }
    finally{
      this.isLoadingCompras= false;
    }
  }

}


