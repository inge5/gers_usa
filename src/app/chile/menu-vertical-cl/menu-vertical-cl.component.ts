import { Component, OnInit } from '@angular/core';
import { MenusClService } from 'src/app/services/menus-cl.service';
declare var $: any;

@Component({
  selector: 'app-menu-vertical-cl',
  templateUrl: './menu-vertical-cl.component.html',
  styleUrls: ['./menu-vertical-cl.component.css']
})
export class MenuVerticalClComponent implements OnInit {
  representaciones: any;
  servicios: any;

  constructor(private _menusService:MenusClService) { }

  ngOnInit(): void {
    this.getMenuPrincipal();
  }

  getMenuPrincipal(){
    this._menusService.getMenuPrincipal()
    .subscribe((res:any) => {
      console.log(res.items);
      this.representaciones = res.items[0];
      this.servicios = res.items[1];
    });  
  }

  cerrarMenuVertical(){
    $('#menuverticalChile').removeClass('switch-cotizador');
    $('.overviwe').removeClass('open-overviwe');
  }

}
