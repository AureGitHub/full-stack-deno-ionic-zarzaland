import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolGuard, SharedComponentsModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { InversionesPage } from './inversiones.page';
import { MenuButtonsModule } from 'app-base-lib';
import { TreeModule } from 'primeng/tree';

const routes: Routes = [
  {
    path: '',
    component: InversionesPage,    
  },
  {
    path: 'acciones',
    loadChildren: () => import('./acciones/acciones.module').then(m => m.AccionesPageModule), 
    canActivate: [RolGuard]
  },
  {
    path: 'acciones_compra',
    loadChildren: () => import('./acciones_compra/acciones_compra.module').then(m => m.AccionesCompraPageModule), 
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
