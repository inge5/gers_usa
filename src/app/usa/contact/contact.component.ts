import { Component, OnInit } from '@angular/core';
import { PagesUsaService } from '../../services/pages-usa.service';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import { environment } from 'src/environments/environment';

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public user_usa: any;
  loader = true;

  seccion_1_data: any = {};
  pais_info_data: any[] = [];
  ciudad_principal_data: any[] = [];
  info_ciudad_data: any[] = [];

  constructor(private _contactenos: PagesUsaService) {
    this.user_usa = {
      servicio: '',
      nombre: '',
      email: '',
      empresa: '',
      pais: 'Estados Unidos',
      asunto: '',
      acepto: '',
    };
  }

  ngOnInit(): void {
    this._contactenos.getContact().subscribe((res: any) => {
      this.loader = false;
      this.seccion_1_data = res.acf.seccion_1;
      this.pais_info_data = res.acf.pais_info;
      this.ciudad_principal_data = res.acf.ciudad_info;
      this.info_ciudad_data = res.acf.pais_info.info_ciudad_data;
    });
  }

  enviarForm_usa(form) {
    $.ajax({
      url: `${environment.domain}/wp-content/themes/gers/formulario-contacto-usa/form-contactenos-usa.php`,
      type: 'POST',
      data: JSON.stringify(this.user_usa),
      dataType: 'json',
      success: function (data) {},
      error: function (error) {
        if (error.status === 200) {
          Swal.fire({
            icon: 'success',
            title:
              'Thank you for giving us your data. We will communicate with you.',
            showConfirmButton: true,
          });

          form.reset();
          this.user_usa.pais = 'Estados Unidos';
        } else {
          Swal.fire(
            'Oops...',
            'Something happened. Correct the errors, please!',
            'error'
          );
        }
      },
    });
  }
}
