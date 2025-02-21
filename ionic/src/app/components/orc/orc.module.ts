import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendarComponentModule, IconremixiconComponentModule, SharedComponentsModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { OrcPage } from './orc.page';
import { HighlightPipe } from './highlight.pipe';

const routes: Routes = [
  {
    path: '',
    component: OrcPage
  }
];

@NgModule({
  declarations: [   
    HighlightPipe,
    OrcPage
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,
    CalendarComponentModule,
    IconremixiconComponentModule,
  ],
 
})
export class OrcPageModule { }
