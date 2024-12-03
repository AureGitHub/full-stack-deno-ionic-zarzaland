import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LabelValueComponentModule, SharedComponentsModule, TableModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { CatastroPage } from './catastro.page';
import { ItemCatastroComponent } from './item/item.component';

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
    TableModule,
    LabelValueComponentModule
  ],
  declarations: [CatastroPage, ItemCatastroComponent]
})
export class CatastroPageModule { }
