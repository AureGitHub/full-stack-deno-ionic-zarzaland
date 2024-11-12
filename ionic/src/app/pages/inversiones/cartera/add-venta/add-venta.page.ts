import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasePage, MyHttpService, SeguridadService,  UtilService,  classHttp, typeMessage } from 'app-base-lib';


@Component({
  selector: 'add-venta',
  templateUrl: './add-venta.page.html',
  styleUrls: ['./add-venta.page.scss'],
})
export class AddVentaPage  implements OnInit {

  isOpenModal = false;
  isAlta=true;

  @Input() set  isOpen (value){ 
    this.isOpenModal = value;
    if(value){
      this.getEmpresas();
    }

  }
  
  @Output() CancelEvent = new EventEmitter<true>();
  @Output() saveEvent = new EventEmitter<any>();

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
      fecha: new FormControl('',Validators.required),
      empresaid: new FormControl('',Validators.required),
      comprasid: new FormControl('',Validators.required),
      acciones: new FormControl('',Validators.required),
      precio: new FormControl('',Validators.required),
      impuestos: new FormControl(''),
      comision: new FormControl(''),
      total: new FormControl('',Validators.required),
    });

    this.formGroup.controls['fecha'].setValue(this.utilService.toISOString(new Date()));
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

  selectCompra(event,compra){


    if(!this.formGroup.controls['comprasid'].value){
      this.formGroup.controls['comprasid'].setValue([]);
    }

    let lstComprasis = this.formGroup.controls['comprasid'].value;


    const accionesTmp = parseFloat(compra.acciones);
    const accionesActual = !this.formGroup.controls['acciones'].value ? 0 : this.formGroup.controls['acciones'].value;

    if(event?.detail?.checked){
      this.formGroup.controls['acciones'].setValue(accionesActual + accionesTmp);

      lstComprasis.push(compra.id);


    }
    else{
      this.formGroup.controls['acciones'].setValue(accionesActual - accionesTmp);
      lstComprasis = lstComprasis.filter(a=> a !=compra.id );
    }

    this.formGroup.controls['comprasid'].setValue(lstComprasis);
    

  }


  async onSubmit() {
    let date = this.utilService.toISOString(new Date(this.formGroup.controls['fecha'].value));
    this.formGroup.controls['fecha'].setValue(date);


    const formData = new FormData();
    Object.keys(this.formGroup.controls).forEach((controlName: string) => {      
        formData.append(controlName, this.formGroup.controls[controlName].value);
    });


    const protocol = this.isAlta ? 'post' : 'put';
    const param = this.isAlta ? null : this.formGroup.controls['id'].value.toString();
    const objHttp: classHttp = new classHttp(protocol, 'accion_compra_venta', null, null, formData, param);
    const resp = await this.myHttpService.ejecuteURL(objHttp);
    this.isSaving = false;
    if (resp) { // verificar... no se si solo responde undefined cuando falla        
      
      this.isAlta = false;
      this.isOpenModal = false;
      this.saveEvent.emit(this.formGroup.value);
    }



  }



}


