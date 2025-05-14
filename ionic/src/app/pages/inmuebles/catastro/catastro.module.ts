import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IconremixiconComponentModule, LabelValueComponentModule, SharedComponentsModule,  } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { CatastroPage } from './catastro.page';
import { ItemCatastroComponent } from './item/item.component';
import { ArriendoComponent } from './arriendo/arriendo.component';

const routes: Routes = [
  {
    path: '',
    component: CatastroPage
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
    LabelValueComponentModule,
    IconremixiconComponentModule
  ],
  declarations: [CatastroPage, ItemCatastroComponent, ArriendoComponent]
})
export class CatastroPageModule { }
