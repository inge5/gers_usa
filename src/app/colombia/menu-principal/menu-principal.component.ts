import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { VariableGlobalService } from "../servicios/variable-global/variable-global.service";
import { AlertasService } from "../servicios/alertas/alertas.service";
import { MenusService } from '../../services/menus.service';
import { PruebaProductosService } from '../servicios/prueba-productos/prueba-productos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  carrito: any;
  carritoAnterior: any;
  cantidadCarrito: number = 0;
  categorias: any[] = [];
  categoriasTemp: any[] = [];
  subCategorias: any[] = [];
  subCategoriasTemp: any[] = [];
  menuPrincipal_data: any[] = [];

  constructor(private variableG: VariableGlobalService, private alertaS: AlertasService, private _menusService: MenusService,
    private productoS: PruebaProductosService, private ruta: Router) { }

  ngOnInit(): void {
    this.llamarDatoLocales();
    this.getMenuPrincipal();
    this.getCategorias();
    
  }

  getCategorias(){
    this.productoS.getCategoriesWP().then(resp => {
      // console.log(resp.data);
      for (const r of resp.data) {
        if (r.count > 0 && r.parent === 0) {
          this.categoriasTemp.push(r);
        }
        if (r.parent > 0) {
          this.subCategoriasTemp.push(r);
        }
      }
      this.categoriasTemp.forEach(element1 => {
        this.subCategoriasTemp.forEach((element2, index) => {
          if (element1.id === element2.parent) {
            // console.log(element1);
            this.subCategorias.push(element2)
          }
          if(this.subCategoriasTemp.length === (index+1)){
            this.categorias.push({
              ...element1,
              subCategorias: this.subCategorias
            })
            this.subCategorias = [];
          }
        })
      })
      this.productoS.setCategoria(this.categorias);
    })
  }

  productosCategoria(categoria: number) {
    this.variableG.setCategoria(categoria);
    $('.subCategorias').removeClass("abrir-subCategorias")
    this.ruta.navigateByUrl('/colombia/productos');
  }

  desplegarSubCategorias(id: number){
    let subCategorias = $('.subCategorias').hasClass('abrir-subCategorias');
    if(subCategorias){
      $('.subCategorias').removeClass("abrir-subCategorias")
    }
    $(`.pp${id}`).addClass("abrir-subCategorias")
    // $(`.pp${id}`).on( "mouseenter mouseleave", "abrir-subCategorias" );
  }

  getMenuPrincipal() {
    this._menusService.getMenuPrincipal()
      .subscribe((res: any) => {
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

    if (dato === 1) {
      $('#mySidenav').addClass('open');
    } else {
      $('#mySidenav').removeClass('open');
    }

    // if (dato === 1) {
    //   document.getElementById('mySidenav').style.width = '40%';
    // } else {
    //   document.getElementById('mySidenav').style.width = '0';
    // }

  }

}
