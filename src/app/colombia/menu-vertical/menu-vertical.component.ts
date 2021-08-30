import { Component, OnInit } from '@angular/core';
import { MenusService } from '../../services/menus.service';

declare var $:any;

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.css']
})
export class MenuVerticalComponent implements OnInit{
  services:any = [];
  representations:any = [];
  constructor(private _menuServices:MenusService) { }

  ngOnInit(): void {
    this._menuServices.getMenuPrincipal()
    .subscribe((res:any) => {
      this.services = res.items[0];
      this.representations = res.items[1];
    });
  }

  cerrarMenuVertical(){
    $('#menuvertical').removeClass('switch-cotizador');
    $('.overviwe').removeClass('open-overviwe');
  }

}
