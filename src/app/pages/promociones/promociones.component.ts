import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('.promociones').css('color','white');
  }
   ngOnDestroy(){
  	$('.promociones').css('color','inherit');
  }

}
