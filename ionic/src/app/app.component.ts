import { Component, OnInit } from '@angular/core';
import { UtilService, typeMessage } from 'app-base-lib';
import { register } from 'swiper/element/bundle';


register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
refreshSelectedDate($event: any) {
throw new Error('Method not implemented.');
}
refreshEnvents($event: any) {
throw new Error('Method not implemented.');
}
eventSourceNew: any;

  constructor(
    private utilService: UtilService,
  ) {

  }
  ngOnInit(): void {

    //  this.utilService.message(typeMessage.danger,'hola');

  }
}
