import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedComponentsModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionPage } from './administracion.page';


const routes: Routes = [
  {
    path: '',
    component: AdministracionPage
  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,
  ],
  declarations: [AdministracionPage]
})
export class AdministracionPageModule { }
