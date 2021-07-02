import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { CapacitacionesService } from 'src/app/services/capacitaciones.service';
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

  constructor(private activedRouter: ActivatedRoute, private router: Router, private capacitacionesS: CapacitacionesService) {
    this.id = this.activedRouter.snapshot.paramMap.get('id');
    this.usuario = {
      nombre: '',
      apellidos:'',
      email: '',
      telefono:'',
      acepto:'',
      capacitacion: ''
    };
   }

   ngOnInit(): void {
    moment.locale('en');
    this.capacitacionesS.getCapacitacionesIdUsa(parseInt(this.id)).subscribe((resp: any) => {
      console.log(resp);
      this.capacitacion = resp;
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
    this.router.navigateByUrl('colombia/capacitaciones')
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
      url: 'https://pruebasneuro.co/N-1003backWordpress/wp-content/themes/gers/inscripcion.php',
      type: 'POST',
      data: JSON.stringify(this.usuario),
      dataType:"json",
      success: function(data) {
        console.log(data);
      }, error: function(error){
        console.log(error);
        if(error.status === 200){
          Swal.fire({
            icon: 'success',
            title: 'Thank you for giving us your data. We will communicate with you.',
            showConfirmButton: true
          }); 
          //console.log(error);
        form.reset();
        } else {
          Swal.fire('Oops...', 'Something happened. Correct the errors, please!', 'error')
        }
      }
    });
   }

}
