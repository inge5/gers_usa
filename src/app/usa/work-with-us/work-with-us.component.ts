import { Component, OnInit } from '@angular/core';
import { VacantesUsaService } from '../../services/vacantes-usa.service';
import { Router } from '@angular/router'; 

import Swal from 'sweetalert2/dist/sweetalert2.js';

declare var $ : any; 

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.css']
})
export class WorkWithUsComponent implements OnInit {
  public usuarioUsa: any;

  loader = true;
  vacantes_data:any[] = [];

  constructor(private _router:Router, private _vacantesusaservice:VacantesUsaService) { 
    this.usuarioUsa = {
      nombres: '',
      apellidos:'',
      email: '',
      telefono:'',
      ubicacion:'Estados Unidos',
      categoria:'',
      acepto:''
    };
  }

  ngOnInit(): void {
    this._vacantesusaservice.getVacancies()
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
    this._router.navigate(['/usa/vacancies', slug]);
  }
  changeFile(file:File){
    this.usuarioUsa.archivo = file[0];
  }

  formTrabajeNosotrosUsa(form){
    var paqueteDeDatos = new FormData();
    paqueteDeDatos.append('archivo', this.usuarioUsa.archivo);
    paqueteDeDatos.append('nombres', this.usuarioUsa.nombres);
    paqueteDeDatos.append('apellidos', this.usuarioUsa.apellidos);
    paqueteDeDatos.append('email', this.usuarioUsa.email);
    paqueteDeDatos.append('telefono', this.usuarioUsa.telefono);
    paqueteDeDatos.append('ubicacion', this.usuarioUsa.ubicacion);
    paqueteDeDatos.append('categoria', this.usuarioUsa.categoria);
    paqueteDeDatos.append('acepto', this.usuarioUsa.acepto);
    var destino = "https://pruebasneuro.co/N-1003backWordpress/wp-content/themes/gers/formulario-vacantes-general/form-vacantes-general.php"; // El script que va a recibir los campos de formulario.
					/* Se envia el paquete de datos por ajax. */
    $.ajax({
      url: destino,
      type: 'POST',
      /*
      data: JSON.stringify(this.usuarioUsa),
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
