import { Component, OnInit } from '@angular/core';

import { PagesService } from '../../services/pages.service';
import { PagesUsaService } from '../../services/pages-usa.service';

import Swal from 'sweetalert2/dist/sweetalert2.js';

declare var $ : any; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public user_usa: any;
  loader = true;

  seccion_1_data: any = {};
  pais_info_data : any [] = [];
  ciudad_principal_data: any[] = [];
  info_ciudad_data: any[] = [];

  constructor(private _contactenos:PagesUsaService) { 
    this.user_usa = {
      servicio: '',
      nombre: '',
      telefono: '',
      ciudad: '',
      empresa: '',
      pais:'Estados Unidos',
      asunto: '',
      acepto: ''
    };
  }

  ngOnInit(): void {
    this._contactenos.getContact()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.pais_info_data = res.acf.pais_info;
        this.ciudad_principal_data = res.acf.ciudad_info;
        this.info_ciudad_data = res.acf.pais_info.info_ciudad_data;
      });
  }

  
  enviarForm_usa(form) {
    $.ajax({
      url: 'https://pruebasneuro.co/N-1003backWordpress/wp-content/themes/gers/formulario-contacto/form-contactenos.php',
      type: 'POST',
      data: JSON.stringify(this.user_usa),
      dataType:"json",
      success: function(data) {
       
      }, error: function(error){
        if(error.status === 200){
          Swal.fire({
            icon: 'success',
            title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true
          }); 
 
        form.reset();
        } else {
          Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')
        }
      }
    });
   }

}
