import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolGuard, SharedComponentsModule, TreeModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { InversionesPage } from './inversiones.page';
import { MenuButtonsModule } from 'app-base-lib';


const routes: Routes = [
  {
    path: '',
    component: InversionesPage,    
  },
  {
    path: 'bolsa',
    loadChildren: () => import('./bolsa/bolsa.module').then(m => m.BolsaPageModule), 
    canActivate: [RolGuard]
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
    MenuButtonsModule,
    TreeModule

  ],
  declarations: [InversionesPage]
})
export class InversionesPageModule { }
