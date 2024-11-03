import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'app-base-lib';


@NgModule({
  declarations: [
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
  ],
  providers: [
  ],

})
export class SharedComponentsModuleLocal { }