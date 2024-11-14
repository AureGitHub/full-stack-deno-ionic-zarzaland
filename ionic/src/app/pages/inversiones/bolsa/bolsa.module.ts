import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule, TableModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { BolsaPage } from './bolsa.page';
import { EmpresasComponentModule } from '../components/empresas/empresas.component.module';

const routes: Routes = [
  {
    path: '',
    component: BolsaPage
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
    EmpresasComponentModule
  ],
  declarations: [BolsaPage]
})
export class BolsaPageModule { }
