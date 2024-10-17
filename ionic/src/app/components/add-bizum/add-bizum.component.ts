import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyHttpService, UtilService, classHttp, typeMessage } from 'app-base-lib';

@Component({
  selector: 'add-bizum',
  templateUrl: './add-bizum.component.html',
  styleUrls: ['./add-bizum.component.scss'],
})
export class AddBizumComponent implements OnInit {


  user: any;
  @Output() saveEvent = new EventEmitter<any>();
  @Output() cancelEvent = new EventEmitter<any>();


  // si grabo yo el bizum, lo paso directamente a CONFIRMADO
  @Input() fromAdmin = false;

  @Input() set SetUser(value) {

    if (!value) return;

    this.user = value;

    this.createForm();

  }

  formGroup: FormGroup;
  isSaving = false;

  constructor(
    private myHttpService: MyHttpService,
    private utilService: UtilService

  ) { }

  ngOnInit() {
  }

  createForm() {
    this.formGroup = new FormGroup({
      'userid': new FormControl('', [Validators.required]),
      'importe': new FormControl('', [Validators.required]),
    });

    this.formGroup.controls['userid'].setValue(this.user?.id);

  }

  async onSubmit() {

    this.isSaving = true;

    try {

      const objHttp: classHttp = new classHttp(
        'post', 'userxbizum',null, null, this.formGroup.value
      );

      const data = await this.myHttpService.ejecuteURL(objHttp);
     

      if(data){

        //lo estoy creando yo desde la pantalla de usuario... creo bizum y lo paso a confirmado!!
        if(this.fromAdmin){
          const objHttp1: classHttp = new classHttp('put', 'userxbizum',null, 'Confirmar',  { estadoid : 2 }, data.id);
          const data1 = await this.myHttpService.ejecuteURL(objHttp1);
          if(data1){
            this.utilService.message(typeMessage.success, 'Confirmado correctamente');
            this.user = null;
            this.isSaving = false;
            this.saveEvent.emit(true);
          }
        }
        else{
          this.utilService.message(typeMessage.success, 'Confirmado correctamente');
          this.user = null;
          this.saveEvent.emit(true);
          this.isSaving = false;
        }
        
      }
    }
    catch (ex) {
      this.isSaving = false;
    }

  }

  cancel() {
    this.user = null;
    this.cancelEvent.emit(true);
  }

}
