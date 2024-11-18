import { Component, OnInit } from '@angular/core';
import {
  BasePage,
  MyHttpService,
  MyHttpService_EXEC,
  SeguridadService,
  UtilService,
  classHttp,
  typeMessage,
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
  { name: 'BK Color', prop: 'descripcion', type: 'text'},
]

  constructor(
    public override myHttpService: MyHttpService,
    public override seguridadService: SeguridadService,
    public override myHttpService_EXEC: MyHttpService_EXEC,
    private utilService: UtilService,


  ) {
    super(myHttpService, seguridadService,myHttpService_EXEC);
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
