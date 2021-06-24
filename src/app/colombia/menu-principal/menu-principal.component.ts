import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import {VariableGlobalService} from "../servicios/variable-global/variable-global.service";
import {AlertasService} from "../servicios/alertas/alertas.service";
import { MenusService } from '../../services/menus.service';

declare var $: any;

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky: boolean = false;
  elementPosition: any;
  carrito: any;
  carritoAnterior: any;
  cantidadCarrito: number = 0;

  menuPrincipal_data:any[] = [];

  constructor(private variableG: VariableGlobalService, private alertaS: AlertasService, private _menusService:MenusService) { }

  ngOnInit(): void {
    this.llamarDatoLocales();
    this.getMenuPrincipal();
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }
  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition && window.screen.width >= 768){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
  
  getMenuPrincipal(){
    this._menusService.getMenuPrincipal()
    .subscribe((res:any) => {
      this.menuPrincipal_data = res.items;
    });  
  }

  llamarDatoLocales() {

    this.variableG.currentMessage.subscribe(response => {
      this.carritoAnterior = response;
      // console.log(this.carritoAnterior);
      this.miCarritoCompraContador();
    });

  }

  miCarritoCompraContador() {
    if (this.carritoAnterior) {
      this.cantidadCarrito = this.carritoAnterior.length;
      console.log(this.cantidadCarrito);
    }



  }


   mostrarProductos(dato) {

    if(dato === 1){
      $('#mySidenav').addClass('open');
    }else{
      $('#mySidenav').removeClass('open');
    }

    // if (dato === 1) {
    //   document.getElementById('mySidenav').style.width = '40%';
    // } else {
    //   document.getElementById('mySidenav').style.width = '0';
    // }

  }

}
