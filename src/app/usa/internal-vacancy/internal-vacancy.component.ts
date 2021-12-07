import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacantesUsaService } from '../../services/vacantes-usa.service';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import { environment } from 'src/environments/environment';

declare var $ : any; 


@Component({
  selector: 'app-internal-vacancy',
  templateUrl: './internal-vacancy.component.html',
  styleUrls: ['./internal-vacancy.component.css']
})
export class InternalVacancyComponent implements OnInit {
  public interesado: any;

  vacante_data:any = {};
  loader = true;

  constructor(private route: ActivatedRoute, private _vacantesusaervice:VacantesUsaService) { 
    this.interesado = {
      nombres: '',
      apellidos:'',
      email: '',
      telefono:'',
      acepto:'',
      vacante:'',
      ubicacion: 'USA'
    };
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.interesado.vacante = slug;
    this._vacantesusaervice.getVacancy(slug)
      .subscribe(res => {
        this.loader = false;
        this.vacante_data = res;
        for(let vacancy of res){
          this.vacante_data = vacancy;
        }
      })
  }
  onChange(file: File){
    this.interesado.archivo = file[0];
  }

  postularme(){
    $("#wrapperInterna").toggleClass("toggled");
    $('.overlaytrabaja').addClass('active');
  }

  public cierraVacante() {
    $('.overlaytrabaja').removeClass('active');
    $("#wrapperInterna").toggleClass("toggled");
  }

  formVacanteInterna(form){
    var paqueteDeDatos = new FormData();
      paqueteDeDatos.append('archivo', this.interesado.archivo);
      paqueteDeDatos.append('nombres', this.interesado.nombres);
      paqueteDeDatos.append('apellidos', this.interesado.apellidos);
      paqueteDeDatos.append('email', this.interesado.email);
      paqueteDeDatos.append('telefono', this.interesado.telefono);
      paqueteDeDatos.append('ubicacion', this.interesado.ubicacion);
      paqueteDeDatos.append('acepto', this.interesado.acepto);
      paqueteDeDatos.append('vacante', this.interesado.vacante) ;
      var destino = `${environment.domain}/wp-content/themes/gers/formulario-vacante-interna-usa/form-vacante-interna-usa.php`; // El script que va a recibir los campos de formulario.
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
            title: 'Thank you for giving us your data. We will communicate with you.',
            showConfirmButton: true
          }); 
          form.reset();

        }, error: function(error){

          Swal.fire('Oops...', 'Something happened. Correct the errors, please!', 'error')
        }
      });
   }

}
