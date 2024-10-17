import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedComponentsModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { ApuestaPage } from './apuesta.page';
import { GestionApuestaComponent } from './gestion-apuesta/gestion-apuesta.component';


const routes: Routes = [
  {
    path: '',
    component: ApuestaPage
  }
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
  declarations: [ApuestaPage, GestionApuestaComponent]
})
export class ApuestaPagePageModule { }
