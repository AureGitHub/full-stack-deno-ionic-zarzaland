import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MyHttpService, classHttp } from 'app-base-lib';

@Component({
  selector: 'user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent implements OnInit {


  @Input() userid: number;

  user: any;

  userBizum: any;

  lstBizums: any[];
  isLoading: boolean;

  tableRefresh :any;

  

  columns = [
  ];



  constructor(
    private myHttpService: MyHttpService,
    private alertController: AlertController,


  ) { }

  async ngOnInit() {

    await this.getUser();
    // await this.getBizums();

    console.log(this.userid);

    this.columns= [
      { name: 'id', prop: 'id', type: 'number', hide: true},
      { name: 'fecha', prop: 'fecha', type: 'date', OrderInit: 'DESC' },
      { name: 'importe', prop: 'importe', type: 'number' },
      { name: 'Borrar', prop: 'estadodesc', type: 'action', action: 'delBizum', canAction : true, condicion : 'row[\'estadoid\'] == 1' },
      { name: 'E', prop: 'estadoid', type: 'number', hide: true},
      { name: 'user', prop: 'userid', type: 'number', filterInit: ` ux."userid" = ${this.userid}` , hide: true},

    ];

    this.refresh();

    
  }


  async refresh(){
    this.tableRefresh = new Date().getTime();
  }

  
  actionEmiter(event: any) {
    switch(event?.action){
      case 'delBizum' :
        if(event.row['estadoid']!=1) return;

        this.borrar(event.row);
        break;
    }
  }
  

  

  async getUser() {
    try {
      const objHttp: classHttp = new classHttp('get', 'user', null,'', null, this.userid.toString());
      const data = await this.myHttpService.ejecuteURL(objHttp);
      if (data) {

        this.user = data;
      }

    }
    catch (ex) {
    }
  }

  async borrar(item){
    const alert = await this.alertController.create({
      header: `Antención!! se va a borrar el bizum de importe ${item['importe']} €. ¿Continuar?`,
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
            this.isLoading = true;    
            const objHttp : classHttp = new classHttp('delete','userxbizum',null,'',null,item['id']);    
            await  this.myHttpService.ejecuteURL(objHttp);    
            this.isLoading=false;    
           this.refresh();
          },
        },
      ],
    });

    await alert.present();

  }


}
