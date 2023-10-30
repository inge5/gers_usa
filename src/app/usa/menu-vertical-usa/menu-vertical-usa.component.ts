import { Component, OnInit } from '@angular/core';
import { MenusUsaService } from 'src/app/services/menus-usa.service';
declare var $: any;

@Component({
  selector: 'app-menu-vertical-usa',
  templateUrl: './menu-vertical-usa.component.html',
  styleUrls: ['./menu-vertical-usa.component.css'],
})
export class MenuVerticalUsaComponent implements OnInit {
  representaciones: any;
  servicios: any;

  constructor(private _menusService: MenusUsaService) {}

  ngOnInit(): void {
    this.getMenuPrincipal();
  }

  getMenuPrincipal() {
    this._menusService.getMenuPrincipal().subscribe((res: any) => {
      this.servicios = res.items[0];
      this.representaciones = res.items[1];
    });
  }

  cerrarMenuVertical() {
    $('#menuverticalUsa').removeClass('switch-cotizador');
    $('.overviwe').removeClass('open-overviwe');
  }
}
