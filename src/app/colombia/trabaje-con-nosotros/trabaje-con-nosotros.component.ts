import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VacantesService } from '../../services/vacantes.service';
import { Router } from '@angular/router'; 

import Swal from 'sweetalert2/dist/sweetalert2.js';

declare var $ : any; 

@Component({
  selector: 'app-trabaje-con-nosotros',
  templateUrl: './trabaje-con-nosotros.component.html',
  styleUrls: ['./trabaje-con-nosotros.component.css']
})
export class TrabajeConNosotrosComponent implements OnInit {
  //public usuario: any;
  public usuario = {
    nombres: '',
    apellidos:'',
    email: '',
    telefono:'',
    ubicacion:'Colombia',
    categoria:'',
    archivo: null,
    acepto:'',
  };

  loader = true;
  vacantes_data:any[] = [];

  constructor(private _router:Router, private _vacantesservice:VacantesService) {
    //this.usuario.ubicacion = 'Colombia';
   }

  ngOnInit(): void {
    this._vacantesservice.getVacantes()
    .subscribe((res:any) => {
      this.loader = false;
      this.vacantes_data = res;
    });
  }

  enviaCurriculum(){
    $("#wrapper").toggleClass("toggled");
    $('.overlaytrabaja').addClass('active');
  }

  public cierraTrabajemos() {
    $('.overlaytrabaja').removeClass('active');
    $("#wrapper").toggleClass("toggled");
  }

  verVacantes(slug:string){
    this._router.navigate(['/colombia/vacantes', slug]);
  }

  changeFile(file:File){
    this.usuario.archivo = file[0];
    console.log(this.usuario.archivo);
  }

  formTrabajeNosotros(form){
    console.log(this.usuario.archivo);
    var paqueteDeDatos = new FormData();
    paqueteDeDatos.append('archivo', this.usuario.archivo);
    paqueteDeDatos.append('nombres', this.usuario.nombres);
    paqueteDeDatos.append('apellidos', this.usuario.apellidos);
    paqueteDeDatos.append('email', this.usuario.email);
    paqueteDeDatos.append('telefono', this.usuario.telefono);
    paqueteDeDatos.append('ubicacion', this.usuario.ubicacion);
    paqueteDeDatos.append('categoria', this.usuario.categoria);
    paqueteDeDatos.append('acepto', this.usuario.acepto);
    var destino = "https://pruebasneuro.co/N-1003backWordpress/wp-content/themes/gers/formulario-vacantes-general/form-vacantes-general.php"; // El script que va a recibir los campos de formulario.
					/* Se envia el paquete de datos por ajax. */
    $.ajax({
      url: destino,
      type: 'POST',
      /*
      data: JSON.stringify(this.usuario),
      dataType:"json",
      */
      contentType: false,
      data: paqueteDeDatos, // Al atributo data se le asigna el objeto FormData.
      processData: false,
      cache: false, 
      success: function(data) {
        if(data.status === 200){
          Swal.fire({
            icon: 'success',
            title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true
          }); 
          //console.log(error);
        form.reset();
        } else {
          Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')
        }
      }, error: function(error){
        
      }
    });
   }

}
