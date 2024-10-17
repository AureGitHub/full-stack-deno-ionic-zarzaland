import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedComponentsModuleLocal } from 'src/app/components/shared-components.module';
import { ButtonModule } from 'app-base-lib';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedComponentsModuleLocal,
    ButtonModule

  ],
  declarations: [HomePage] 
})
export class HomePageModule {}
