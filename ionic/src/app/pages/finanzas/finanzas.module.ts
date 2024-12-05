import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolGuard, SharedComponentsModule,  } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { MenuButtonsModule } from 'app-base-lib';
import { FinanzasPage } from './finanzas.page';
import { EmpresasComponentModule } from './components/empresas/empresas.component.module';
import { menuItems } from './menu';


const routes: Routes = [
  {
    path: '',
    component: FinanzasPage,    
  },
  {
    path: 'bolsa',
    loadChildren: () => import('./bolsa/bolsa.module').then(m => m.BolsaPageModule), 
    canActivate: [RolGuard]
  },
  {
    path: 'fondo',
    loadChildren: () => import('./fondo/fondo.module').then(m => m.FondoPageModule), 
    canActivate: [RolGuard]
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./estadisticas/estadisticas.module').then(m => m.EstadisticasPageModule), 
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
    EmpresasComponentModule


  ],
  declarations: [FinanzasPage]
})
export class FinanzasPageModule { }
