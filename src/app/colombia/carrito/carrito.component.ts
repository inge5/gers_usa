import {Component, OnInit} from '@angular/core';
import {VariableGlobalService} from "../servicios/variable-global/variable-global.service";
import {AlertasService} from "../servicios/alertas/alertas.service";
import {Router} from "@angular/router";
import {PruebaProductosService} from "../servicios/prueba-productos/prueba-productos.service";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: any;
  aumentarDisminuir = [];
  carritoAnterior = [];
  addProductoCarrito = [];
  cantidadCarrito: number = 0;
  solicitarCotizacion: boolean;
  listadoCarrito: boolean;
  nameProducto: any;
  filtros: any;
  imagen_grande: any;

  constructor(
    private variableG: VariableGlobalService,
    private alertaS: AlertasService,
    private pruebaS:  PruebaProductosService,
    private ruta: Router) {
  }

  ngOnInit(): void {

    this.llamarDatoLocales();
    this.miCarritoCompraContador();

    this.listadoCarrito = true;
    this.solicitarCotizacion = false;

    this.filtros = {
      nombre: null,
      empresa: null,
      nit: null,
      email: null,
      celular: null,
    }
  }


  quitarItem(data, co) {

    this.carrito = localStorage.getItem('carrito');
    let dataCarrito = JSON.parse(this.carrito);
    let i = dataCarrito.indexOf(data);

    dataCarrito.splice(co, 1);


    localStorage.setItem('carrito', JSON.stringify(dataCarrito));
    this.llamarDatoLocales();
    let datos = 'Articulo removido del Carrito de Compras ';
    this.alertaS.showToasterWarning(datos);

    this.variableG.changeMessage();
  }


  llamarDatoLocales() {

    this.variableG.currentMessage.subscribe(response => {
      this.carritoAnterior = response;
      // for (const carrito of this.carritoAnterior) {
      //   console.log(carrito);
      //   this.imagen_grande = carrito.images[0].src;
      // }
        // console.log(this.carritoAnterior);
      this.miCarritoCompraContador();
    });
  }

  miCarritoCompraContador() {

    if (this.carritoAnterior) {
      this.carritoAnterior.forEach(respuesta => {
        this.cantidadCarrito += 1;
        // console.log(this.cantidadCarrito);
      });
      //console.log(this.cantidadCarrito);
    } else {
      this.cantidadCarrito = null;
    }

  }

  cambiarUnidades(data, identificador, proceso) {

    this.aumentarDisminuir = JSON.parse(localStorage.getItem('carrito'));

    if (proceso === 1) {
      this.aumentarDisminuir[identificador]['producto_cantidad'] += 1;
    } else {

      if (this.aumentarDisminuir[identificador]['producto_cantidad'] > 1) {
        this.aumentarDisminuir[identificador]['producto_cantidad'] -= 1;
      } else {
        let datos = 'Articulo agregado a la canasta no puede ser menor a 1 unidad';
        this.alertaS.showToasterWarning(datos);
      }
    }

    localStorage.setItem('carrito', JSON.stringify(this.aumentarDisminuir));
    this.variableG.changeMessage();
  }


  borrarListado() {
    localStorage.setItem('carrito', JSON.stringify([]));
    this.alertaS.showToasterFull('Articulos removidos exitosamente');
    this.variableG.changeMessage();
    this.llamarDatoLocales();
  }

  solicitarCotizacionCarrito() {
    this.listadoCarrito = false;
    this.solicitarCotizacion = true;
  }

  volverCarrito() {
    this.listadoCarrito = true;
    this.solicitarCotizacion = false;
  }


  mostrarProductos(dato) {

    if (dato === 1) {
      document.getElementById('mySidenav').style.width = '40%';
    } else {
      document.getElementById('mySidenav').style.width = '0';
    }

  }


  detalleProductos(producto, codigo) {

    this.nameProducto = producto.replace(/ /gi, '-');
    this.nameProducto = this.nameProducto.toLowerCase();

    this.nameProducto = this.nameProducto.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    this.ruta.navigate(['/detalle-productos/' + codigo + '/' + this.nameProducto])
    console.log(this.nameProducto)
  }

  enviarCorreoCotizacion() {

   const data = {
          productos: JSON.parse(localStorage.getItem('carrito')),
          filtros: this.filtros
    }

    this.pruebaS.enviarCorreos(data).then(respuesta => {
      console.log(respuesta);
      if (respuesta['success']) {
        this.alertaS.showToasterFull('Correo enviado Exitosamente');
      } else {
        this.alertaS.showToasterWarning('Valida que los campos diligenciado esten corectos');

      }
    }).catch(error => {
      console.log(error);
    });
  }

}
