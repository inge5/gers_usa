import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.css']
})
export class MenuVerticalComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  cerrarMenuVertical(){
    $('#menuvertical').removeClass('switch-cotizador');
    $('.overviwe').removeClass('open-overviwe');
  }



}
