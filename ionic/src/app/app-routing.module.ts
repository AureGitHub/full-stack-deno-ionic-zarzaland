import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RolGuard } from '@aure-org/app-ionic-base-lib';

const routes: Routes = [
    {
    path: 'login',
    loadChildren: () => import( '../../node_modules/@aure-org/app-ionic-base-lib').then(m => m.LoginPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },



  {
    path: 'forgot-password',
    loadChildren: () => import( '../../node_modules/@aure-org/app-ionic-base-lib').then(m => m.ForgotPasswordModule)
  },

  {
    path: 'inmuebles',
    loadChildren: () => import('./pages/inmuebles/inmuebles.module').then(m => m.InmueblesPageModule), 
    canActivate: [RolGuard]
  },
  {
    path: 'servicios',
    loadChildren: () => import('./pages/servicios/servicios.module').then(m => m.ServiciosPageModule), 
    canActivate: [RolGuard]
  },

  // {
  //   path: 'opcion',
  //   loadChildren: () => import('./pages/carta/opcion/opcion.module').then(m => m.OpcionPagePageModule), 
  //   canActivate: [RolGuard]
  // },
  



  {
    path: '**',
    loadChildren: () => import( '../../node_modules/@aure-org/app-ionic-base-lib').then(m => m.NotFoundPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,  useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }