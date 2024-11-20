import { Component, OnInit } from '@angular/core';
import {
  BasePage,
  BasePageService,
} from 'app-base-lib';


@Component({
  selector: 'agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage extends BasePage implements OnInit {
  
  eventSourceNew: any;
  addTipoTipoEvento=false;

columns = [ 
  { name: 'Descripción', prop: 'descripcion', type: 'text', OrderInit: 'ASC'},
  { name: 'Color', prop: 'color', type: 'text'},
  { name: 'BK Color', prop: 'bkcolor', type: 'text'},
]

  constructor(
    public override basePageService: BasePageService


  ) {
    super(basePageService);
    this.entityName = 'casa/gasto';
  }

  async ngOnInit() {
    this.Init();

  }

  async handleRefresh(event) {
    event.target.complete();
  }

  refreshSelectedDate($event: any) {
    }
    refreshEnvents($event: any) {
    }


}
