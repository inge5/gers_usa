import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import {VariableGlobalService} from "../../colombia/servicios/variable-global/variable-global.service";
import {AlertasService} from "../../colombia/servicios/alertas/alertas.service";
import { MenusClService } from '../../services/menus-cl.service';

@Component({
  selector: 'app-menu-principal-chile',
  templateUrl: './menu-principal-chile.component.html',
  styleUrls: ['./menu-principal-chile.component.css']
})
export class MenuPrincipalChileComponent implements OnInit {
  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky: boolean = false;
  elementPosition: any;
  /*
  carrito: any;
  carritoAnterior: any;
  cantidadCarrito: number = 0;
  */
  categorias: any[] = [];
  categoriasTemp: any[] = [];
  subCategorias: any[] = [];
  subCategoriasTemp: any[] = [];
  menuPrincipal_data: any[] = [];

  constructor(private variableG: VariableGlobalService, private alertaS: AlertasService, private _menusService:MenusClService) { }

  ngOnInit(): void {
    //this.llamarDatoLocales();
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

  /*
  llamarDatoLocales() {
    this.variableG.currentMessage.subscribe(response => {
      this.carritoAnterior = response;
      // console.log(this.carritoAnterior);
      this.miCarritoCompraContador();
    });

  }

  miCarritoCompraContador() {
    if (this.carritoAnterior && this.carritoAnterior.length > 0) {
      this.cantidadCarrito = this.carritoAnterior.length;
      // console.log(this.cantidadCarrito);
    }
  }
  */

   mostrarProductos(dato) {

    if (dato === 1) {
      document.getElementById('mySidenav').style.width = '39vw';
    } else {
      document.getElementById('mySidenav').style.width = '0';
    }
  }

}
