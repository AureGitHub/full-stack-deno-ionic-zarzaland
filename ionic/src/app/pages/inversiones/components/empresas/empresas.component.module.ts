import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule, TableModule } from 'app-base-lib';
import { EmpresasComponent } from './empresas.component';



@NgModule({
  declarations: [EmpresasComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedComponentsModule,
    TableModule
  ],
  exports: [EmpresasComponent],
 
})
export class EmpresasComponentModule { }