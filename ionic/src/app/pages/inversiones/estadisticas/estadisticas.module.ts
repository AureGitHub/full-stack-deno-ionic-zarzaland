import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule, TableModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasPage } from './estadisticas.page';

const routes: Routes = [
  {
    path: '',
    component: EstadisticasPage
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
    TableModule,
  ],
  declarations: [EstadisticasPage]
})
export class EstadisticasPageModule { }
