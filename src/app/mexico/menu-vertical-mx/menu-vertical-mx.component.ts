import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-menu-vertical-mx',
  templateUrl: './menu-vertical-mx.component.html',
  styleUrls: ['./menu-vertical-mx.component.css']
})
export class MenuVerticalMxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cerrarMenuVertical(){
    $('#menuverticalMexico').removeClass('switch-cotizador');
    $('.overviwe').removeClass('open-overviwe');
  }

}
