import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { AccionesCompraPage } from './acciones_compra.page';
import { TreeModule } from 'primeng/tree';

const routes: Routes = [
  {
    path: '',
    component: AccionesCompraPage
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
    TreeModule
  ],
  declarations: [AccionesCompraPage]
})
export class AccionesCompraPageModule { }
