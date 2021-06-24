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
  imagenDefecto = 'assets/images/detalle-productos/1.jpg';
  imagenSuperior: any;
  productoUrl: any;
  carritoAnterior = [];
  listadoProductosDetalle: any;
  addProductoCarrito = [];
  imagen_grande: any;
  carritoTemporal = [];
  bandera: boolean;

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
  pasarImagen(imagen :string) {
    this.imagen_grande = imagen;
  }

  listarDetalleProductos(codigo: number) {

    this.productosS.getlistarProductoUnicoWP(codigo).then(respuesta => {
      console.log(respuesta.data);
      this.listadoProductosDetalle = respuesta.data;
      this.imagen_grande = this.listadoProductosDetalle['images'][0].src;
    }).catch(error => {
      console.log(error);
    })

    // this.productosS.getlistarProductoUnico(218).then(respuesta => {
    //   console.log(respuesta);
      // this.listadoProductosDetalle = respuesta['productos'][0];
      // console.log(this.listadoProductosDetalle);
    // }).catch(error => {
    //   console.log(error);
    // })

  }

  agregarCarrito(id: number) {

    if(localStorage.getItem('carrito')){
      this.carritoTemporal = JSON.parse(localStorage.getItem('carrito'));

      if(this.carritoTemporal.length > 0){
        this.carritoTemporal.forEach(element => {
          if(id === element.id){
            console.log("Existe");
            element.producto_cantidad += 1;
            this.bandera = true;
          }else{
            if(!this.bandera){
              console.log("No existe");
              this.listadoProductosDetalle['producto_cantidad'] = 1;
              this.bandera = false;
            }
          }
        })
        if(!this.bandera){
          this.carritoTemporal.push(this.listadoProductosDetalle);
        }
        this.bandera = false;
      }else{
        this.listadoProductosDetalle['producto_cantidad'] = 1;
        this.carritoTemporal.push(this.listadoProductosDetalle);
      }
      localStorage.setItem('carrito', JSON.stringify(this.carritoTemporal));
      const data = 'Articulo Agregado Correctamente al Carrito';
      this.alertaS.showToasterFull(data);
      console.log(this.carritoTemporal);
    }else{
      this.listadoProductosDetalle['producto_cantidad'] = 1;
      this.carritoTemporal.push(this.listadoProductosDetalle);
      localStorage.setItem('carrito', JSON.stringify(this.carritoTemporal));
      const data = 'Articulo Agregado Correctamente al Carrito';
      this.alertaS.showToasterFull(data);
      console.log(this.carritoTemporal);
    }
    this.variableG.changeMessage();
    // this.carritoAnterior = JSON.parse(localStorage.getItem('carrito'));
    // console.log(this.carritoAnterior);

    // console.log(this.addProductoCarrito);

    // if (this.addProductoCarrito) {
    //   if (this.carritoAnterior) {
    //   } else {
    //     this.carritoAnterior = [];
    //   }
    //   this.listadoProductosDetalle['producto_cantidad'] = 1;
    //   this.carritoAnterior.push(this.listadoProductosDetalle);
    //   localStorage.setItem('carrito', JSON.stringify(this.carritoAnterior));
    //   const data = 'Articulo Agregado Correctamente al Carrito';
    //   this.alertaS.showToasterFull(data);
    //   this.variableG.changeMessage();

    // }
  }
}
