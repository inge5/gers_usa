import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-menu-vertical-cl',
  templateUrl: './menu-vertical-cl.component.html',
  styleUrls: ['./menu-vertical-cl.component.css']
})
export class MenuVerticalClComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cerrarMenuVertical(){
    $('#menuverticalChile').removeClass('switch-cotizador');
    $('.overviwe').removeClass('open-overviwe');
  }

}
