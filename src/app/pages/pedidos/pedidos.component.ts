import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('.pedidos').css('color','white');
  }
  ngOnDestroy(){
  	$('.pedidos').css('color','inherit');
  }

}
