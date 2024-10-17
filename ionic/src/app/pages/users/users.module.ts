import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPage } from './users.page';
import { SharedComponentsModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModuleLocal } from 'src/app/components/shared-components.module';
import { IonicSelectableComponent } from 'ionic-selectable';


const routes: Routes = [
  {
    path: '',
    component: UsersPage
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
    SharedComponentsModuleLocal,
    IonicSelectableComponent
  ],
  declarations: [UsersPage ]
})
export class UsersPagePageModule { }
