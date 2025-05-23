import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RolGuard } from 'app-base-lib';
import { menuItems } from './settings/menu';

const routes: Routes = [
    {
    path: 'login',
    loadChildren: () => import( 'app-base-lib').then(m => m.LoginPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },



  {
    path: 'forgot-password',
    loadChildren: () => import('app-base-lib').then(m => m.ForgotPasswordModule)
  },


  {
    path: 'orc',
    loadChildren: () => import('./components/orc/orc.module').then(m => m.OrcPageModule), 
    canActivate: [RolGuard]
  },

  {
    path: 'inmuebles',
    loadChildren: () => import('./pages/inmuebles/inmuebles.module').then(m => m.InmueblesPageModule), 
    canActivate: [RolGuard]
  },

  {
    path: 'finanzas',
    loadChildren: () => import('./pages/finanzas/finanzas.module').then(m => m.FinanzasPageModule), 
    canActivate: [RolGuard]
  },


  {
    path: 'casa',
    loadChildren: () => import('./pages/casa/casa.module').then(m => m.CasaPagePageModule), 
    canActivate: [RolGuard]
  },

  

  {
    path: '**',
    loadChildren: () => import( 'app-base-lib').then(m => m.NotFoundPageModule)
  },


];

routes.forEach(route => {
  route.data = { menuItems } 
})

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,  useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }