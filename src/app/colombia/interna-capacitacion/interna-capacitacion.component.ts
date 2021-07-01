import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { CapacitacionesService } from 'src/app/services/capacitaciones.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-interna-capacitacion',
  templateUrl: './interna-capacitacion.component.html',
  styleUrls: ['./interna-capacitacion.component.css']
})
export class InternaCapacitacionComponent implements OnInit {

  usuario: any;
  id: string;
  capacitacion: any;
  constructor(private activedRouter: ActivatedRoute, private capacitacionesS: CapacitacionesService) { 
    this.id = this.activedRouter.snapshot.paramMap.get('id');
    this.usuario = {
      nombres: '',
      apellidos:'',
      email: '',
      telefono:'',
      acepto:''
    };
  }

  ngOnInit(): void {
    this.capacitacionesS.getCapacitacionesId(parseInt(this.id)).subscribe((resp: any) => {
      console.log(resp);
      this.capacitacion = resp;
      this.capacitacion.fecha = moment(resp.acf.fecha_inicio+' '+resp.acf.hora_inicio).format('DD MMMM YYYY hh:mm:ss a');
      let categorias = [];
      resp.categorias_capacitaciones.forEach(element => {
        this.capacitacionesS.getCategoriaCapacitacionesId(element).subscribe((respCate: any) => {
          categorias.push(respCate.name);
          this.capacitacion.categorias = categorias;
        })  
      });
    })
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
            title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true
          }); 
          //console.log(error);
        form.reset();
        } else {
          Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')
        }
      }
    });
   }
}
