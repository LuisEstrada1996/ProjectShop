import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
declare var $:any;


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router
) { }

  ngOnInit() {

  }
  inicio(){
  	this.router.navigate(['/inicio']);
  }
  pedidos(){
  	this.router.navigate(['/pedidos']);
  }
   catalogo(){
  	this.router.navigate(['/catalogo']);
  }
  perfil(){
  	this.router.navigate(['/perfil']);
  }
  promociones(){
  	this.router.navigate(['/promociones']);
  }
  salir(){
    console.log('cerrar sesion')
  }

}
