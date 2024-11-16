import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule, TableModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { FondoPage } from './fondo.page';

const routes: Routes = [
  {
    path: '',
    component: FondoPage
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
  declarations: [FondoPage]
})
export class FondoPageModule { }
