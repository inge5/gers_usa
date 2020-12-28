import { Component, OnInit } from '@angular/core';
import {productos} from "../../../../assets/data/json";
import {PruebaProductosService} from "../../servicios/prueba-productos/prueba-productos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertasService} from "../../servicios/alertas/alertas.service";
import {Productos} from "../../interfaz/productos";
import {VariableGlobalService} from "../../servicios/variable-global/variable-global.service";
declare var $: any;
@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  listadoProductos = productos;
  imagenDefecto = 'assets/images/detalle-productos/1.jpg';
  imagenSuperior: any;
  productoUrl: any;
  carritoAnterior = [];
  listadoProductosDetalle: Productos;
  addProductoCarrito = [];

  constructor(private  productosS: PruebaProductosService,
              private ruta: Router, private activatedRoute: ActivatedRoute,
              private variableG: VariableGlobalService,
              private alertaS: AlertasService) {

              this.productoUrl = this.activatedRoute.snapshot.params.codigo;

              if (this.productoUrl) {
                  this.listarDetalleProductos(this.productoUrl);
              }

  }
  ngOnInit(): void {

    console.log('cambio')
    this.listadoProductosDetalle = {
      producto_cantidad: 0,
      producto_codigo: null,
      producto_estado: true,
      producto_imagen: null,
      producto_nombre: '',
      producto_precio: 0,
      producto_prefijo: '',
      producto_promocion: false,
      categoria_codigo: null,
      producto_imagen1: null,
      producto_imagen2: null,
      producto_imagen3: null,
      producto_imagen4: null,
      producto_talla: null,
      producto_tipoenvio: null,
      producto_descripcion: null,
      producto_valorPromocional: null,
      producto_cuidadoprenda: null,
      producto_politicacambio: null,
    };

  }


  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked() {

  }
  pasarImagen(imagen :string) {
    this.listadoProductosDetalle['producto_imagen1'] = imagen;
  }

  listarDetalleProductos(codigo) {

    this.productosS.getlistarProductoUnico(codigo).then(respuesta => {
      console.log(respuesta);
      this.listadoProductosDetalle = respuesta['productos'][0];
      console.log(this.listadoProductosDetalle);
    }).catch(error => {
      console.log(error);
    })

  }

  agregarCarrito() {

    this.carritoAnterior = JSON.parse(localStorage.getItem('carrito'));
    console.log(this.carritoAnterior);

    //this.addProductoCarrito.push(this.listadoProductosDetalle);
    console.log(this.addProductoCarrito);

    if (this.addProductoCarrito) {
      if (this.carritoAnterior) {
      } else {
        this.carritoAnterior = [];
      }
      this.listadoProductosDetalle['producto_cantidad'] = 1;
      this.carritoAnterior.push(this.listadoProductosDetalle);

      localStorage.setItem('carrito', JSON.stringify(this.carritoAnterior));
      const data = 'Articulo Agregado Correctamente al Carrito';
      this.alertaS.showToasterFull(data);
      this.variableG.changeMessage();

    }
  }


}
