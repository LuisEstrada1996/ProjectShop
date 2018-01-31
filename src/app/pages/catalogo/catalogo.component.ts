import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('.catalogo').css('color','white');
  }
  ngOnDestroy(){
  	$('.catalogo').css('color','inherit');
  }

}
