import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { CapacitacionesService } from 'src/app/services/capacitaciones.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-internal-trainings',
  templateUrl: './internal-trainings.component.html',
  styleUrls: ['./internal-trainings.component.css']
})
export class InternalTrainingsComponent implements OnInit {

  usuario: any;
  id: string;
  capacitacion: any;
  siteKey: string;

  constructor(private activedRouter: ActivatedRoute, private router: Router, private capacitacionesS: CapacitacionesService) {
    this.siteKey = "6LcBAH0bAAAAAEF2iIZPrJupF-K2cdrDgonjUn2s";
    this.id = this.activedRouter.snapshot.paramMap.get('id');
    this.usuario = {
      nombre: '',
      apellidos:'',
      email: '',
      telefono:'',
      acepto:'',
      capacitacion: '',
      pais: 'USA',
      recaptcha: ''
    };
   }

   ngOnInit(): void {
    moment.locale('en');
    this.capacitacionesS.getCapacitacionesIdUsa(parseInt(this.id)).subscribe((resp: any) => {

      this.capacitacion = resp;
      console.log(this.capacitacion);
      this.capacitacion.fecha = moment(resp.acf.fecha_inicio+' '+resp.acf.hora_inicio).format('DD MMMM YYYY hh:mm:ss a');
      let categorias = [];
      resp.categorias_capacitaciones.forEach(element => {
        this.capacitacionesS.getCategoriaCapacitacionesIdUsa(element).subscribe((respCate: any) => {
          categorias.push(respCate.name);
          this.capacitacion.categorias = categorias;
        })  
      });
    })
  }
  returnCapacitaciones(){
    this.router.navigateByUrl('/trainings')
  }
  enviarInscripcion(){
    $("#wrapper").toggleClass("toggled");
    $('.overlaytrabaja').addClass('active');
  }

  public cierraInscripcion() {
    $('.overlaytrabaja').removeClass('active');
    $("#wrapper").toggleClass("toggled");
  }
  formTrabajeNosotros(form){
    this.usuario.capacitacion = this.capacitacion.title.rendered;
    $.ajax({
      url: `${environment.domain}/wp-content/themes/gers/formulario-inscripcion-usa/inscripcion-usa.php`,
      type: 'POST',
      data: JSON.stringify(this.usuario),
      dataType:"json",
      success: function(data) {

      }, error: function(error){
  
        if(error.status === 200){
          Swal.fire({
            icon: 'success',
            title: 'Thank you for giving us your data. We will communicate with you.',
            showConfirmButton: true
          }); 
      
        form.reset();
        this.usuario.pais = "USA";
        } else {
          Swal.fire('Oops...', 'Something happened. Correct the errors, please!', 'error')
        }
      }
    });
   }

}
