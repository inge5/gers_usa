import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { VariableGlobalService } from 'src/app/colombia/servicios/variable-global/variable-global.service';
import { MenusUsaService } from '../../services/menus-usa.service';
declare var $: any;

@Component({
  selector: 'app-menu-principal-usa',
  templateUrl: './menu-principal-usa.component.html',
  styleUrls: ['./menu-principal-usa.component.css']
})
export class MenuPrincipalUsaComponent implements OnInit {

  menuPrincipal_data: any[] = [];
  busqueda: string = "";

  constructor(private _menusService:MenusUsaService, private ruta: Router, private variableG: VariableGlobalService) { }

  ngOnInit(): void {
    this.getMenuPrincipal();
  }

  getMenuPrincipal(){
    this._menusService.getMenuPrincipal()
    .subscribe((res:any) => {
      this.menuPrincipal_data = res.items;
    });  
  }
  buscar(){
    this.variableG.setBuscador(this.busqueda);
    this.ruta.navigateByUrl('/searcher');
  }

  abrirBuscador(){
    $('.buscador').toggleClass('abrir-buscador');
    $('.no-ancho').toggleClass('ancho')
    $('#buscar').toggleClass('lupa-detalle')
  }
}
