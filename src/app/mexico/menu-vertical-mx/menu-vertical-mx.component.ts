import { Component, OnInit } from '@angular/core';
import { MenusMxService } from 'src/app/services/menus-mx.service';
declare var $: any;

@Component({
  selector: 'app-menu-vertical-mx',
  templateUrl: './menu-vertical-mx.component.html',
  styleUrls: ['./menu-vertical-mx.component.css']
})
export class MenuVerticalMxComponent implements OnInit {
  servicios: any;
  representaciones: any;

  constructor(private _menusService: MenusMxService) { }

  ngOnInit(): void {
    this.getMenuPrincipal();
  }

  getMenuPrincipal() {
    this._menusService.getMenuPrincipal()
      .subscribe((res: any) => {
        this.servicios = res.items[0];
        this.representaciones = res.items[1];
      });
  }
  cerrarMenuVertical(){
    $('#menuverticalMexico').removeClass('switch-cotizador');
    $('.overviwe').removeClass('open-overviwe');
  }

}
