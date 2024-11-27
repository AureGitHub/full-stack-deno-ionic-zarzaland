import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BasePage,
  BasePageService,
  classHttp,
  EditorEntityComponent,
  typeMessage,
} from 'app-base-lib';


@Component({
  selector: 'agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage extends BasePage implements OnInit {


  buttonsTab = {};
  turnos = {};
  tipoturno: any;


  columns = [
    { name: 'Descripción', prop: 'descripcion', type: 'text', OrderInit: 'ASC' },
    { name: 'Color', prop: 'color', type: 'text' },
    { name: 'BK Color', prop: 'bkcolor', type: 'text' },
  ]
  lstEventos: any;

  @ViewChild('editorEntity') editorEntityComponent: EditorEntityComponent;

  constructor(
    public override basePageService: BasePageService


  ) {
    super(basePageService);
    this.entityName = 'casa/evento';
  }

  async ngOnInit() {
    this.Init();
    this.getEventos();
    this.buttonTab('turnos');

  }

  async handleRefresh(event) {
    this.getEventos();
    event.target.complete();
  }

  async getEventos() {

    this.isLoading = true;

    let objHttp: classHttp = new classHttp('get', `casa/evento`, null, '', null, null);
    try {
      let resp = await this.myHttpService.ejecuteURL(objHttp);
      this.lstEventos = resp?.data;
    }
    catch (ex) {
      this.utilService.message(typeMessage.danger, ex.message);
    }
    finally {
      this.isLoading = false;
    }

  }


  async gestionTurnos(fecha) {
    if (this.turnos['carmen'] || this.turnos['aure']) {
      if (this.tipoturno) {

        //send to server : 

        const formData = {};
        formData['eventotipoid'] = this.turnos['aure'] ? '2' : '3';
        formData['periodoturno'] = this.tipoturno;
        formData['fecha'] = this.utilService.toISOString(new Date(fecha));

        //hago un post

        this.isLoading = true;
        const resp = await this.myHttpService_EXEC.Save('post', 'casa/evento', formData, this.pk);
        this.getEventos();
      }

    }
  }
  async refreshSelectedDate(fecha: any) {
    if (this.buttonsTab['turnos']) {
      await this.gestionTurnos(fecha);
    }
    else{
      //añado evento normal
      this.editorEntityComponent.management(0,null);
    }


  }
  refreshEnvents($event: any) {

  }


  buttonTab(cual) {

    const selected = this.buttonsTab[cual];

    for (const pp in this.buttonsTab) {
      this.buttonsTab[pp] = false;
    }

    if (selected) {
      return;
    }

    if (!this.buttonsTab.hasOwnProperty(cual)) {
      this.buttonsTab[cual] = true;
    }
    else {
      this.buttonsTab[cual] = !this.buttonsTab[cual];
    }



    //mejorarlo... si no he accedido al servidor, acceder
    // solo hay que traerse los datos del tab activo
    switch (cual) {
      case '':
      default:
        break;
    }

  }


}


