import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule,  } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { GastosPage } from './gastos.page';

const routes: Routes = [
  {
    path: '',
    component: GastosPage
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
  declarations: [GastosPage]
})
export class GastosPageModule { }
