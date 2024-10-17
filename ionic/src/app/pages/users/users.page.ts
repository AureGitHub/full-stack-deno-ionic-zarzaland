import { Component, OnInit } from '@angular/core';
import { BasePage, MyHttpService, SeguridadService } from 'app-base-lib';


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage extends BasePage implements OnInit {

  lstUser: any[] = [];
  userSelected=-1;

  columns = [];

  soloActivos = true;
  rowAddSaldo: any;
  rowAddBizum: any;

  constructor(
    public override  myHttpService: MyHttpService,
    public override seguridadService: SeguridadService,


  ) {
    super(myHttpService,seguridadService);
    this.entityName = 'User';
  }

  async ngOnInit() {
    this.Init();
    this.lstUser = await this.getUsers();
    this.userSelected = this.lstUser.find(a=>a.id ==-1);
    


   

    this.columns = [
      { name: 'Nombre', prop: 'name', type: 'text',  },
      { name: 'Saldo', prop: 'saldo', type: 'number',  OrderInit: 'ASC' },
      { name: 'estado', prop: 'estadoid', type: 'number', filterInit: ' "estadoid" <> 2', hide: true },
      { name: 'Bizum', prop: '', type: 'action',  icon: 'card', action: 'addBizum' , canAction : this.user.isAdmin},  
      { name: 'Saldo', prop: '', type: 'action',  icon: 'logo-euro', action: 'addSaldo', canAction : this.user.isAdmin },
  
    ];
    
    this.getTableRefresh();
  }


  selectUserEvent(){

    const filterUser = this.userSelected['id'] == -1 ? '' : ` id = ${this.userSelected['id']}  `;

    this.columns = [
      { name: 'Nombre', prop: 'name', type: 'text',   filterInit: filterUser },
      { name: 'Saldo', prop: 'saldo', type: 'number',  OrderInit: 'ASC' },
      { name: 'estado', prop: 'estadoid', type: 'number', filterInit: ' "estadoid" <> 2', hide: true },
      { name: 'Bizum', prop: '', type: 'action',  icon: 'card', action: 'addBizum' , canAction : this.user.isAdmin},  
      { name: 'Saldo', prop: '', type: 'action',  icon: 'logo-euro', action: 'addSaldo', canAction : this.user.isAdmin },

    ];

     this.getTableRefresh();
  }


  soloActivoEvent(event) {
    let colEstado = this.columns.find(a => a.name == 'estado');
    if (!colEstado) return;
    colEstado['filterInit'] = !this.soloActivos ? ' "estadoid" <> 2' : '';
    this.getTableRefresh();
  }



  actionEmiter(event: any) {
    switch(event?.action){
      case 'addBizum' :
        this.rowAddBizum = event.row;
        break;

        case 'addSaldo' :
          this.rowAddSaldo = event.row;
          break;
    }
  }
  



}
