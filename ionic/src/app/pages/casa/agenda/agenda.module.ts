import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendarComponentModule, IconremixiconComponentModule, SharedComponentsModule, TableModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { AgendaPage } from './agenda.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaPage
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
    CalendarComponentModule,
    IconremixiconComponentModule,


  ],
  declarations: [AgendaPage]
})
export class AgendaPageModule { }
