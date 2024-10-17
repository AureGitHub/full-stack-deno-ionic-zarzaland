import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyHttpService, UtilService, classHttp, typeMessage } from 'app-base-lib';

@Component({
  selector: 'add-saldo',
  templateUrl: './add-saldo.component.html',
  styleUrls: ['./add-saldo.component.scss'],
})
export class AddSaldoComponent implements OnInit {


  user: any;
  @Output() saveEvent = new EventEmitter<any>();
  @Output() cancelEvent = new EventEmitter<any>();


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
      'id': new FormControl('', [Validators.required]),
      'importe': new FormControl('', [Validators.required]),
    });

    this.formGroup.controls['id'].setValue(this.user?.id);

  }

  async onSubmit() {

    this.isSaving = true;

    try {

      const objHttp: classHttp = new classHttp(
        'post', 'user',null, 'addSaldo', this.formGroup.value
      );

      const data = await this.myHttpService.ejecuteURL(objHttp);
      this.isSaving = false;

      if(data){
        this.utilService.message(typeMessage.success, 'Guardado correctamente');
        this.user = null;
        this.saveEvent.emit(true);
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
