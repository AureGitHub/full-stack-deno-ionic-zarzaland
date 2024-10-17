import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BasePage, MyHttpService, SeguridadService, UtilService, classHttp, typeMessage } from 'app-base-lib';


@Component({
  selector: 'app-bizum',
  templateUrl: './bizum.page.html',
  styleUrls: ['./bizum.page.scss'],
})
export class BizumPage extends BasePage implements OnInit {

  columns = [ ];

  NoCerrados = true;
  TotalImporte: any;

  constructor(
    public override  myHttpService: MyHttpService,
    private utilService: UtilService,
    private alertController: AlertController,
    public override   seguridadService: SeguridadService,

  ) {
    super(myHttpService,seguridadService);
    this.entityName = 'userxbizum';

    
  }

  async ngOnInit() {
    this.Init();

    this.columns = [
      { name: 'De quien', prop: 'dequien', type: 'text'},
      { name: 'importe', prop: 'importe', type: 'number'},    
      { name: 'P.', prop: 'estadoid',  type: 'action',  icon: 'swap-horizontal', filterInit: `  ux."estadoid"<>3 `, action: 'updatePendiente',  OrderInit: 'ASC', canAction : this.user.isAdmin,},
      { name: 'F', prop: 'fecha', type: 'date', OrderInit: 'ASC'},
      
    ];
    
    this.getTableRefresh();
  }

  NoCerradosEvent(event) {
    let colEstado = this.columns.find(a => a.prop == 'estadoid');
    if (!colEstado) return;
    colEstado['filterInit'] = !this.NoCerrados ? ' ux."estadoid"<>3' : '';
    this.getTableRefresh();
  }



  async actionEmiter(event: any) {
    switch (event?.action) {
      case 'updatePendiente':

      const alert = await this.alertController.create({
        header: `Antención!! se va a confirmar el bizum. ¿Continuar?`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
  
            },
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: async () => {
              this.updatePendiente(event.row);
            },
          },
        ],
      });
  
      await alert.present();

       
        break;
    }
  }

  async updatePendiente(row: any) {

    try {
      this.isLoading=true;
      const estadoid= row['estadoid'] == 1 ? 2 : 1;
      const objHttp: classHttp = new classHttp('put', this.entityName,null, 'Confirmar', { estadoid }, row.id);
      const data = await this.myHttpService.ejecuteURL(objHttp);
      if (data) {
        this.utilService.message(typeMessage.success, 'Guardado correctamente');
        this.getTableRefresh();
      }
    }
    catch (ex) {
    }

  }


  async cerrarEvent(){


    const alert = await this.alertController.create({
      header: `Antención!! se van a cerrar todos los bizum confirmados (${this.TotalImporte} €). ¿Continuar?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: async () => {
           
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: async () => {
            await this.cerrarAll();
          },
        },
      ],
    });

    await alert.present();



  }
  async cerrarAll() {
    try {
      const objHttp: classHttp = new classHttp('put', this.entityName, null, 'cerrarAll' , {});
      const data = await this.myHttpService.ejecuteURL(objHttp);
      if (data) {
        this.utilService.message(typeMessage.success, 'Guardado correctamente');
        this.getTableRefresh();
      }


    }
    catch (ex) {
    }
  }


  onLoadDataEmiter(rows: any[]) {
    let arrayImporte = rows.filter(a => a.estadoid==2);
    arrayImporte = arrayImporte.map(a => a.importe);
    this.TotalImporte = arrayImporte.reduce((acc, cur) => acc + Number(cur), 0);
  }


}
