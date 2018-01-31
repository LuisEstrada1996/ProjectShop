import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

   ngOnInit() {
  	$('.perfil').css('color','white');
  }
   ngOnDestroy(){
  	$('.perfil').css('color','inherit');
  }

}
