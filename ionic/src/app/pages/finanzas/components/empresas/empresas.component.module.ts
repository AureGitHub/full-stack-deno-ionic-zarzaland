import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule,  } from 'app-base-lib';
import { EmpresasComponent } from './empresas.component';



@NgModule({
  declarations: [EmpresasComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedComponentsModule,
  ],
  exports: [EmpresasComponent],
 
})
export class EmpresasComponentModule { }
