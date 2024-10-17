import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataComponent } from './user-data/user-data.component';
import { AddBizumComponent } from './add-bizum/add-bizum.component';
import { SharedComponentsModule } from 'app-base-lib';
import { AddSaldoComponent } from './add-saldo/add-saldo.component';


@NgModule({
  declarations: [
    UserDataComponent,
    AddBizumComponent,
    AddSaldoComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,    
    ReactiveFormsModule,
    RouterModule,
    FormsModule ,
    SharedComponentsModule
  ],
  exports: [
    UserDataComponent,
    AddBizumComponent,
    AddSaldoComponent,
  ],
  providers: [
  ],

})
export class SharedComponentsModuleLocal { }