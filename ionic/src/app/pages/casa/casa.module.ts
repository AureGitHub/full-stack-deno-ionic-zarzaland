import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolGuard, SharedComponentsModule, TreeModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { MenuButtonsModule } from 'app-base-lib';
import { CasaPage } from './casa.page';
import  {menuItems} from './menu'


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
  {
    path: 'gastos',
    loadChildren: () => import('./gastos/gastos.module').then(m => m.GastosPageModule), 
    canActivate: [RolGuard]
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaPageModule), 
    canActivate: [RolGuard]
  },
];

routes.forEach(route => {
  route.data = { menuItems } 
})
 
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
