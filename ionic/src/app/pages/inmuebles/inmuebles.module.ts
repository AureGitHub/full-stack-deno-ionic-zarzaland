import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuButtonsModule, RolGuard, SharedComponentsModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { InmueblesPage } from './inmuebles.page';
import { menuItems } from './menu';


const routes: Routes = [
  {
    path: '',
    component: InmueblesPage
  },
  {
    path: 'catastro',
    loadChildren: () => import('./catastro/catastro.module').then(m => m.CatastroPageModule), 
    canActivate: [RolGuard]
  },
];

routes.forEach(route => {
  route.data = { menuItems } 
})

@NgModule({
  declarations: [InmueblesPage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,
    MenuButtonsModule,

  ],
 
})
export class InmueblesPageModule { }
