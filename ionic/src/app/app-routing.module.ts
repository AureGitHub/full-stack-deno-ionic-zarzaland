import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RolGuard } from 'app-base-lib';

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
    path: 'inmuebles',
    loadChildren: () => import('./pages/inmuebles/inmuebles.module').then(m => m.InmueblesPageModule), 
    canActivate: [RolGuard]
  },

  {
    path: 'inversiones',
    loadChildren: () => import('./pages/inversiones/inversiones.module').then(m => m.InversionesPageModule), 
    canActivate: [RolGuard]
  },


  {
    path: '**',
    loadChildren: () => import( 'app-base-lib').then(m => m.NotFoundPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,  useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }