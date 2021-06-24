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
      ubicacion:'',
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
    this._router.navigate(['/vacantes', slug]);
  }

  formTrabajeNosotrosUsa(form){
    $.ajax({
      //url: 'https://pruebasneuro.co/N-1057backgane/wp-content/themes/gane/suscribirse.php',
      type: 'POST',
      data: JSON.stringify(this.usuarioUsa),
      dataType:"json",
      success: function(data) {
        
      }, error: function(error){
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
