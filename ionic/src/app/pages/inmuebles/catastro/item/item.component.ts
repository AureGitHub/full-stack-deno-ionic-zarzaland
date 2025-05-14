import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'item-catastro',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemCatastroComponent implements OnInit {

@Input() catastro: any;
@Input() user: any;
@Input()  tableRefresh;
      

columns = [ 
  { name: 'Pago', prop: 'fechapago', type: 'date', OrderInit: 'DESC'},
  { name: 'Quien', prop: 'quien', type: 'text'},
  { name: 'I', prop: 'fechainicio', type: 'date', OrderInit: 'DESC'},
  { name: 'F', prop: 'fechafin', type: 'date', OrderInit: 'DESC'},
  { name: 'Importe', prop: 'importe', type: 'number'},
  
];

  constructor(
   
  ) {
  }

  async ngOnInit() {
  
  }



}
