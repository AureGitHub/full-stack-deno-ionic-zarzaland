import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IconremixiconComponentModule, SharedComponentsModule,  } from 'app-base-lib';
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
    IconremixiconComponentModule
  ],
  declarations: [EstadisticasPage]
})
export class EstadisticasPageModule { }
