import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import {VariableGlobalService} from "../../colombia/servicios/variable-global/variable-global.service";
import {AlertasService} from "../../colombia/servicios/alertas/alertas.service";
import { MenusClService } from '../../services/menus-cl.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-menu-principal-chile',
  templateUrl: './menu-principal-chile.component.html',
  styleUrls: ['./menu-principal-chile.component.css']
})
export class MenuPrincipalChileComponent implements OnInit {
  menuPrincipal_data: any[] = [];
  busqueda: string = "";

  constructor(private _menusService:MenusClService, private ruta: Router, private variableG: VariableGlobalService) { }

  ngOnInit(): void {
    //this.llamarDatoLocales();
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
    this.ruta.navigateByUrl('/buscador');
  }

  abrirBuscador(){
    $('.buscador').toggleClass('abrir-buscador');
    $('.no-ancho').toggleClass('ancho')
    $('#buscar').toggleClass('lupa-detalle')
  }

}
