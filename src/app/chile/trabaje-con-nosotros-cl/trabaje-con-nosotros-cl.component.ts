import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VacantesClService } from '../../services/vacantes-cl.service';
import { Router } from '@angular/router'; 

import Swal from 'sweetalert2/dist/sweetalert2.js';

declare var $ : any; 

@Component({
  selector: 'app-trabaje-con-nosotros-cl',
  templateUrl: './trabaje-con-nosotros-cl.component.html',
  styleUrls: ['./trabaje-con-nosotros-cl.component.css']
})
export class TrabajeConNosotrosClComponent implements OnInit {
  public usuario: any;

  loader = true;
  vacantes_data:any[] = [];

  constructor(private _router:Router, private _vacantesservice:VacantesClService) { 
    this.usuario = {
      nombres: '',
      apellidos:'',
      email: '',
      telefono:'',
      ubicacion:'Chile',
      categoria:'',
      acepto:''
    };
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
    this._router.navigate(['/chile/vacantes', slug]);
  }
  changeFile(file:File){
    this.usuario.archivo = file[0];
  }

  formTrabajeNosotros(form){
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
        Swal.fire({
          icon: 'success',
          title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
          showConfirmButton: true
        }); 
        form.reset();
        //console.log(error);
      }, error: function(error){
        Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')
      }
    });
   }

}
