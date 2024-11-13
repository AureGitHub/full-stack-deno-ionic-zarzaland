import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolGuard, SharedComponentsModule, TreeModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { MenuButtonsModule } from 'app-base-lib';
import { CasaPage } from './casa.page';


const routes: Routes = [
  {
    path: '',
    component: CasaPage,    
  },
  {
    path: 'compras',
    loadChildren: () => import('./compra/compra.module').then(m => m.CompraPageModule), 
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
  declarations: [CasaPage]
})
export class CasaPagePageModule { }
