import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'item-catastro',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemCatastroComponent implements OnInit {

@Input() catastro: any;
  
  constructor(
   
  ) {
  }

  async ngOnInit() {
  
  }



}
