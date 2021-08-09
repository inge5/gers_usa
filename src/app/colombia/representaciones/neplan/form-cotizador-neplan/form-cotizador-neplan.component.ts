import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-form-cotizador-neplan',
  templateUrl: './form-cotizador-neplan.component.html',
  styleUrls: ['./form-cotizador-neplan.component.css']
})
export class FormCotizadorNeplanComponent implements OnInit {

  @Input() titulo: string = "";
  @Input() subTitulo: string ="";
  filtros: any;
  bandera: boolean = false;
  constructor() {
    this.filtros = {
      nombre: '',
      empresa: '',
      nit: '',
      correo: '',
      celular: '',
    }
   }

  ngOnInit(): void {
  }

  volverNeplan(){
    $('#neplan-cotizador').addClass('cerrar-formulario');
  }

  volverAtras(){
    $('#form-neplan-cotizador').addClass('cerrar-formulario');
    $('#neplan-cotizador').removeClass('cerrar-formulario');
  }

  firtsForm(){
    $('#neplan-cotizador').addClass('cerrar-formulario');
    $('#form-neplan-cotizador').removeClass('cerrar-formulario');
  }

  enviarForm(form) {
    console.log("Hola");
    return;
    const dataInfo = {
      productos: JSON.parse(localStorage.getItem('carrito')),
      filtros: this.filtros
    }
    var paqueteDeDatos = new FormData();
    paqueteDeDatos.append('productos', localStorage.getItem('carrito'));
    paqueteDeDatos.append('nombre', this.filtros.nombre);
    paqueteDeDatos.append('empresa', this.filtros.empresa);
    paqueteDeDatos.append('nit', this.filtros.nit);
    paqueteDeDatos.append('correo', this.filtros.correo);
    paqueteDeDatos.append('celular', this.filtros.celular);

    //console.log(paqueteDeDatos.get('productos'));

    $.ajax({
      url: 'https://pruebasneuro.co/N-1003backWordpress/wp-content/themes/gers/formulario-solicitar-cotizacion/form-cotizacion.php',
      type: 'POST',
      data: paqueteDeDatos,
      contentType: false,
      processData: false,
      cache: false, 
      success: function(data) {
          Swal.fire({
            icon: 'success',
            title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true
          }); 
          //console.log(error);
        form.reset();
      }, error: function(error){
          Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')
       }
    });
   }

}
