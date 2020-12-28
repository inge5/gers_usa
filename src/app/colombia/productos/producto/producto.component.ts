import {Component, OnInit} from '@angular/core';
import {productos} from '../../../../assets/data/json';
import {PruebaProductosService} from "../../servicios/prueba-productos/prueba-productos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  listadoProductos = productos;
  nameProducto: any;
  filtros: any;

  forma1: boolean;
  forma2: boolean;
  forma3: boolean;

  currentPage: any;
  firstPageUrl: any;
  lastPage: any;
  lastPageUrl: any;
  nextPageUrl: any;
  prevPageUrl: any;
  to: any;
  total: any;

  constructor(private  productosS: PruebaProductosService, private ruta: Router) {
  }

  ngOnInit(): void {
    this.filtros = {
      gossen: null,
      ndb: null,
      gmc: null,
      dranetz: null,
      beckwith: null,
      ordenar: null,
      paginas: null
    }
    this.listarProductos();
    /*this.listarForma1();
    this.listarForma2();
    this.listarForma3();*/

    this.forma1 = true;
  }


  listarProductos() {



    this.productosS.getListarProductos().then(respuesta => {
      console.log(respuesta);
      this.listadoProductos = respuesta['productos'];
    }).catch(error => {

    });

  }


  filtradoProductos() {
    if (this.filtros.gossen ||
      this.filtros.beckwith ||
      this.filtros.dranetz ||
      this.filtros.gmc ||
      this.filtros.ndb ||
      this.filtros.ordenar ||
      this.filtros.paginas){
      this.productosS.postListarProductos(this.filtros).then(respuesta => {
        this.listadoProductos = respuesta['productos'];
      }).catch(error => {
        console.log(error);
      });
    } else {
      this.listarProductos();
      console.log('no hay')
    }

  }

  detalleProductos(producto, codigo) {

    this.nameProducto = producto.replace(/ /gi, '-');
    this.nameProducto = this.nameProducto.toLowerCase();

    this.nameProducto = this.nameProducto.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    this.ruta.navigate(['/detalle-productos/' + codigo + '/' + this.nameProducto])
    console.log(this.nameProducto)
  }

  listarForma1() {
    this.forma1 = true;
    this.forma2 = false;
    this.forma3 = false;

  }

  listarForma2() {
    this.forma1 = false;
    this.forma2 = true;
    this.forma3 = false;

  }

  listarForma3() {
    this.forma1 = false;
    this.forma2 = false;
    this.forma3 = true;
  }

}
