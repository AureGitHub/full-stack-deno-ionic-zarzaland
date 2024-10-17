import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyHttpService, UtilService, classHttp, typeMessage } from 'app-base-lib';



enum TC_ApuestaEstado {  
  abierta = 1,  
  cerrada = 2,    
  finalizada = 3      
}


@Component({
  selector: 'gestion-apuesta',
  templateUrl: './gestion-apuesta.component.html',
  styleUrls: ['./gestion-apuesta.component.scss'],
})
export class GestionApuestaComponent implements OnInit {


  apuesta: any;

  estadoid = null;

  @Output() saveEvent = new EventEmitter<any>();
  @Output() cancelEvent = new EventEmitter<any>();

  totalRojos: any;
  isClosing=false;
  ganado: any;

  @Input() set SetApuesta(value) {

    if (!value) return;

    this.apuesta = value;
    this.estadoid = this.apuesta.estadoid;

    if( this.apuesta.estadoid == TC_ApuestaEstado.abierta){
      const objHttp: classHttp = new classHttp('get', 'User',null,'InRed');  
      this.myHttpService.ejecuteURL(objHttp).then(data=>{
        this.totalRojos = data.total;
      });
    }
  }

  constructor(
    private myHttpService: MyHttpService,
    private utilService: UtilService

  ) { }

  ngOnInit() {
  }



  async finalizarApuesta() {

    this.isClosing = true;

    try {

      const objHttp: classHttp = new classHttp('put', 'Apuesta',null, 'finalizar',{apostado: this.apuesta.apostado, ganado : this.ganado},this.apuesta.id);
      const data = await this.myHttpService.ejecuteURL(objHttp);
      this.isClosing = false;

      if(data){
        this.apuesta = null;
        this.saveEvent.emit(true);
      }
    }
    catch (ex) {
      this.isClosing = false;
    }

  }


  


  async cerrarApuesta() {

    this.isClosing = true;

    try {

      const objHttp: classHttp = new classHttp('put', 'Apuesta',null, 'cerrar',null,this.apuesta.id);
      const data = await this.myHttpService.ejecuteURL(objHttp);
      this.isClosing = false;

      if(data){
        this.apuesta = null;
        this.saveEvent.emit(true);
      }
    }
    catch (ex) {
      this.isClosing = false;
    }

  }

  cancel() {
    this.apuesta = null;
    this.cancelEvent.emit(true);
  }

}
