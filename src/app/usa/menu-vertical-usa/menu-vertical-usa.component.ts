import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-menu-vertical-usa',
  templateUrl: './menu-vertical-usa.component.html',
  styleUrls: ['./menu-vertical-usa.component.css']
})
export class MenuVerticalUsaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cerrarMenuVertical(){
    $('#menuverticalUsa').removeClass('switch-cotizador');
    $('.overviwe').removeClass('open-overviwe');
  }

}
