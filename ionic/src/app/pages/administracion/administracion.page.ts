import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BasePage, MyHttpService, SeguridadService, UtilService, classHttp, typeMessage } from 'app-base-lib';


@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
})
export class AdministracionPage extends BasePage implements OnInit {
  objData: any;
  BodyMorosos = 'Hola. Tu saldo es inferior a 1 euro. Si no lo incrementas, no jugarás la próxima apuesta';
  SubjectMorosos = 'Euromillones. Saldo inferior a 1 Euro';

  subjectUltimaApuesta = ''
  BodyUltimaApuesta = '';

  lstAllEmailsInRed = '';
  lstUserLastApuesta= '';
  anyUserInRed: boolean;


  users = [];
  totalUsers: number;
  totalSaldos: number;

  constructor(
    public override  myHttpService: MyHttpService,
    private utilService: UtilService,
    private alertController: AlertController,
    public override   seguridadService: SeguridadService,
    

  ) {
    super(myHttpService, seguridadService);


  }

  async ngOnInit() {

    this.isLoading = true;
    this.Init();
    this.users = await this.getUsers();
    this.users = this.users.filter(a => a.id > 0);
    this.users = this.users.sort((a, b) => a['saldo'] - b['saldo']);


    this.totalUsers = this.users.length;
    const lstSaldos = this.users.map(a => parseFloat(a.saldo));
    this.totalSaldos = lstSaldos.reduce((acc, curr) => acc + curr);


    const objHttp: classHttp = new classHttp('get', 'Administracion', null, null, null, null);
    this.objData = await this.myHttpService.ejecuteURL(objHttp);

    this.isLoading = false;
    this.getEmailInRed();
    this.getsubjectUltimaApuesta();

  }



  downloadUsers() {
    const printContent = document.getElementById("htmlData");
    const blob = new Blob([printContent.innerHTML], { type: 'text/csv' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Saldo_${new Date().toLocaleDateString()}.html`;
    link.click();

  }



  getEmailInRed() {
    const lstUserInRed: any[] = this.users.filter(a => a.saldo < 1);
    this.anyUserInRed = lstUserInRed.length > 0;
    if (lstUserInRed.length > 0) {
      this.lstAllEmailsInRed = lstUserInRed.map((a) => a.email).join(';');
    }

  }

  getUserUltimaApuestaFinalizada() {
    const lstUserInRed: any[] = this.users.filter(a => a.saldo < 1);
    this.anyUserInRed = lstUserInRed.length > 0;
    if (lstUserInRed.length > 0) {
      this.lstAllEmailsInRed = lstUserInRed.map((a) => a.email).join(';');
    }

  }



  getMes(month) {
    switch (parseInt(month)) {
      case 1: return 'Enero';
      case 2: return 'Febrero';
      case 3: return 'Marzo';
      case 4: return 'Abril';
      case 5: return 'Mayo';
      case 6: return 'Junio';
      case 7: return 'Julio';
      case 8: return 'Agosto';
      case 9: return 'Septiembre';
      case 10: return 'Octubre';
      case 11: return 'Noviembre';
      case 12: return 'Diciembre';
    }

    return '';

  }

  getsubjectUltimaApuesta() {
    var d = new Date();
    var Nday = (d.getDay() == 0) ? 7 : d.getDay();
    var SumDay = 4 - Nday;
    d.setDate(d.getDate() + SumDay + 1);
    const dia = d.toLocaleDateString().split('/')[0];
    const mes = this.getMes(d.toLocaleDateString().split('/')[1]);
    const anno = d.toLocaleDateString().split('/')[2];

    this.subjectUltimaApuesta = `Euromillones. VIERNES,${dia} de ${mes} de ${anno} `;
  }




  copiarToClickBoard(text){

    let aux = document.createElement("input");
    aux.setAttribute("value", text);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    this.utilService.message(typeMessage.success,'Texto copiado');    
    document.body.removeChild(aux);

  }


}
