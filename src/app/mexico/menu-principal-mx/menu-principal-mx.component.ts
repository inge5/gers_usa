import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { VariableGlobalService } from 'src/app/colombia/servicios/variable-global/variable-global.service';
import { MenusMxService } from 'src/app/services/menus-mx.service';
declare var $: any;

@Component({
  selector: 'app-menu-principal-mx',
  templateUrl: './menu-principal-mx.component.html',
  styleUrls: ['./menu-principal-mx.component.css']
})
export class MenuPrincipalMxComponent implements OnInit {
  menuPrincipal_data: any[] = [];
  busqueda: string = "";

  constructor(private _menusService: MenusMxService, private ruta: Router, private variableG: VariableGlobalService) { }

  ngOnInit(): void {
    this.getMenuPrincipal();
  }

  getMenuPrincipal() {
    this._menusService.getMenuPrincipal()
      .subscribe((res: any) => {
        this.menuPrincipal_data = res.items;
      });
  }

  buscar(){
    this.variableG.setBuscador(this.busqueda);
    this.ruta.navigateByUrl('/mexico/buscador');
  }

  abrirBuscador(){
    $('.buscador').toggleClass('abrir-buscador');
    $('.no-ancho').toggleClass('ancho')
    $('#buscar').toggleClass('lupa-detalle')
  }
}
