import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  constructor(private _menuServices:MenusService, private ruta: Router) { }

  ngOnInit(): void {
    this._menuServices.getMenuPrincipal()
    .subscribe((res:any) => {
      this.services = res.items[0];
      this.representations = res.items[1];
    });
  }

  cerrarMenuVertical(){
    // Swal.fire('Cargando Productos','Espere un momento','info');
    // Swal.showLoading();
    // this.ruta.navigateByUrl('/colombia/productos');  
    $('#menuvertical').removeClass('switch-cotizador');
    $('.overviwe').removeClass('open-overviwe');
  }

}
