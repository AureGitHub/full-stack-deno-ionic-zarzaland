import { Component, OnInit } from '@angular/core';
import { BasePage, MyHttpService, SeguridadService, UtilService,  WebcamImage,  classHttp, typeMessage } from 'app-base-lib';



@Component({
  selector: 'app-apuesta',
  templateUrl: './apuesta.page.html',
  styleUrls: ['./apuesta.page.scss'],
})


export class ApuestaPage extends BasePage implements OnInit {


a=''


 selectedApuesta = null;
  webcamImage: WebcamImage;

onLoadDataEmiter($event: any) {

} 

  columns = [];


  constructor(
    public override  myHttpService: MyHttpService,
    private utilService: UtilService, 
    public override   seguridadService: SeguridadService,

  ) {
    super(myHttpService, seguridadService);
    this.entityName = 'Apuesta';
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

  async ngOnInit() {

    console.log('entra');

    this.Init();
    const filterInit = this.user.isAdmin ? '' : ` uxa.userid = ${this.user.id}`;

    this.columns = [
      { name: 'F', prop: 'fecha', type: 'date', OrderInit: 'DESC'},
      { name: 'A', prop: 'apostado', type: 'number'},
      { name: 'G', prop: 'ganado', type: 'number'},
      { name: 'B', prop: 'boletoid',  type: 'file', fileid : 'boletoid fileid', filename : 'boletoid filename'},

      { name: 'Estado', prop: 'estado',  type: 'action',  action: 'actionApuesta', canAction : this.user.isAdmin, filterInit },
    ];
    
    // this.getTableRefresh();
  }


  // handleImage(webcamImage: WebcamImage) {
  //   const w = webcamImage;
  // }

  async actionEmiter(event: any) {
    switch (event?.action) {
      case 'actionApuesta':      

      // if( event.row.estadoid ==1){
      //   const objHttp: classHttp = new classHttp('GET', 'User',null,'InRed');  
      //   const totalRojo = await this.myHttpService.ejecuteURL(objHttp);
      // }
      this.selectedApuesta =event.row;    
      console.log(event.row.boleto)   ;
      break;
    }
  }



  
  async updatependientesAll() {
    try {
      const objHttp: classHttp = new classHttp('put', this.entityName,null, 'updatependientesAll' , {});
      const data = await this.myHttpService.ejecuteURL(objHttp);
      if (data) {
        this.utilService.message(typeMessage.success, 'Guardado correctamente');
        this.getTableRefresh();
      }


    }
    catch (ex) {
    }
  }
}
