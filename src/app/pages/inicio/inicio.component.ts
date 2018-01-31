import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
declare var $:any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('.inicio').css('color','white');
  }
   ngOnDestroy(){
  	$('.inicio').css('color','inherit');
  }

}
