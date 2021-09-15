import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagesUsaService } from '../../../services/pages-usa.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-neplan-usa',
  templateUrl: './neplan-usa.component.html',
  styleUrls: ['./neplan-usa.component.css']
})
export class NeplanUsaComponent implements OnInit {
  loader = true;
  banner_data : any = {};
  item_tab_data: any[] = [];
  repetidor_botones_data: any[] = [];
  formularioCotizacion: FormGroup;
  public activePillIndex:number = 0;


  constructor(private _neplan:PagesUsaService, private fb: FormBuilder) { 
    this.crearFormularioContizacion();
  }

  ngOnInit(): void {
    this._neplan.getNeplanUsa()
      .subscribe((res:any) => {
        this.loader = false;
        this.banner_data = res.acf.banner;
        this.item_tab_data = res.acf.item_tab;
        this.repetidor_botones_data = res.acf.item_tab.repetidor_botones;
      });
  }

  crearFormularioContizacion(){
    this.formularioCotizacion = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(7)]],
      company: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(4)]],
      industry: ['', [Validators.required, Validators.minLength(4)]],
      numberLicenses: ['', [Validators.required, Validators.minLength(1)]],
      nodesLimit: ['', [Validators.required, Validators.minLength(2)]],
      modules: ['', [Validators.required, Validators.minLength(4)]],
      comments: ['', Validators.required]
    })
  }

  get Name(){
    return this.formularioCotizacion.get('name').invalid && this.formularioCotizacion.get('name').touched;
  }
  get Email(){
    return this.formularioCotizacion.get('email').invalid && this.formularioCotizacion.get('email').touched;
  }
  get PhoneNumber(){
    return this.formularioCotizacion.get('phoneNumber').invalid && this.formularioCotizacion.get('phoneNumber').touched;
  }
  get Company(){
    return this.formularioCotizacion.get('company').invalid && this.formularioCotizacion.get('company').touched;
  }
  get Title(){
    return this.formularioCotizacion.get('title').invalid && this.formularioCotizacion.get('title').touched;
  }
  get Industry(){
    return this.formularioCotizacion.get('industry').invalid && this.formularioCotizacion.get('industry').touched;
  }
  get NumberLicenses(){
    return this.formularioCotizacion.get('numberLicenses').invalid && this.formularioCotizacion.get('numberLicenses').touched;
  }
  get NodesLimit(){
    return this.formularioCotizacion.get('nodesLimit').invalid && this.formularioCotizacion.get('nodesLimit').touched;
  }
  get Modules(){
    return this.formularioCotizacion.get('modules').invalid && this.formularioCotizacion.get('modules').touched;
  }
  get Comments(){
    return this.formularioCotizacion.get('comments').invalid && this.formularioCotizacion.get('comments').touched;
  }

  public selectPill(index:number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
   }
   enviarFormularioCotizacion(){
    
    if(this.formularioCotizacion.invalid){
      return Object.values( this.formularioCotizacion.controls ).forEach(control => control.markAsTouched());
    }
    var paqueteDeDatos = new FormData();
    paqueteDeDatos.append('name', this.formularioCotizacion.get('name').value);
    paqueteDeDatos.append('email', this.formularioCotizacion.get('email').value);
    paqueteDeDatos.append('phone_number', this.formularioCotizacion.get('phoneNumber').value);
    paqueteDeDatos.append('company', this.formularioCotizacion.get('company').value);
    paqueteDeDatos.append('title', this.formularioCotizacion.get('title').value);
    paqueteDeDatos.append('industry', this.formularioCotizacion.get('industry').value);
    paqueteDeDatos.append('number_licenses', this.formularioCotizacion.get('numberLicenses').value);
    paqueteDeDatos.append('nodes_limit', this.formularioCotizacion.get('nodesLimit').value);
    paqueteDeDatos.append('modules', this.formularioCotizacion.get('modules').value);
    paqueteDeDatos.append('comments', this.formularioCotizacion.get('comments').value);
    $.ajax({
      url: 'https://pruebasneuro.co/N-1003backWordpress/wp-content/themes/gers/formulario-cotizador-neplan-usa/form-cotizador-neplan-usa.php',
      type: 'POST',
      data: paqueteDeDatos,
      contentType: false,
      processData: false,
      cache: false, 
      success: function(data) {
          Swal.fire({
            icon: 'success',
            title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true
          });
      }, error: function(error){
          Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')
       }
    });
    this.formularioCotizacion.reset();
   }
}
