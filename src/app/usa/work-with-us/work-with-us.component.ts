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
  vacantes_data:any[];
  categorias: any[] = [];
  horarioVacante: any[];
  filtrar: any[];
  vacantes_dataTemp: any;
  horarioVacanteTemp: any[];
  bandera: boolean = false;

  constructor(private _router:Router, private _vacantesusaservice:VacantesUsaService) { 
    this.usuarioUsa = {
      nombres: '',
      apellidos:'',
      email: '',
      telefono:'',
      ubicacion:'USA',
      categoria:'',
      acepto:''
    };
  }

  ngOnInit(): void {
    this.getVacantes();
    this.getCategoriasFiltro();
  }

  getVacantes() {
    if (!this.vacantes_data) {
      this._vacantesusaservice.getVacancies()
        .subscribe((res: any) => {
          this.loader = false;
          this.vacantes_data = res;


          let horarioVacante = [];
          let horarioVacanteMap = [];
          res.forEach(element => {
            horarioVacante.push({
              horario_vacante: element.acf.horario_vacante,
              bandera: false
            })
          });
          horarioVacanteMap = horarioVacante.map(item => [item.horario_vacante, item]);

          let horarioVacanteMapArr = new Map(horarioVacanteMap);

          let unicosHorarioVacante = [...horarioVacanteMapArr.values()];

          this.horarioVacante = unicosHorarioVacante;

        })
    } else {
      let horarioVacante = [];
          let horarioVacanteMap = [];
          this.vacantes_data.forEach(element => {
            horarioVacante.push({
              horario_vacante: element.acf.horario_vacante,
              bandera: false
            })
          });
        horarioVacanteMap = horarioVacante.map(item => [item.horario_vacante, item]);

      let horarioVacanteMapArr = new Map(horarioVacanteMap);

      let unicosHorarioVacante = [...horarioVacanteMapArr.values()];

      this.horarioVacante = unicosHorarioVacante;
    }

  }

  categoriasFiltro(categoriaSelec: any = null) {
    this.filtrar = [];
    if (!this.vacantes_dataTemp || this.vacantes_dataTemp === this.vacantes_data) {
      this.vacantes_dataTemp = this.vacantes_data;
    }
    this.vacantes_dataTemp.forEach(element => {
      this.categorias.forEach(filtro => {
        element.categoria_vacancies.filter(filtroCate => {
          if (filtro.bandera && filtro.id === filtroCate) {
            this.filtrar.push(element);
          }

        });
      })
    })
    this.vacantes_dataTemp.forEach(element => {
      this.horarioVacante.forEach(filtro => {
        if(filtro.bandera && element.acf.horario_vacante === filtro.horario_vacante){
          if(!this.bandera){
       
            this.filtrar = [];
          }
          this.bandera = true;
          this.filtrar.push(element);
        }
      })
    })

    if (this.filtrar.length > 0) {
  
      this.vacantes_data = this.filtrar;


      if(!this.bandera){

        this.getVacantes();
      }
      this.bandera = false;
    } else  if(this.filtrar.length === 0 && categoriaSelec.bandera){
      this.vacantes_data = [];
      this.bandera = false;
    }else{
      this.vacantes_data = this.vacantes_dataTemp;
      this.bandera = false;
   
      this.getVacantes();
    }
  }

  getCategoriasFiltro() {
    this._vacantesusaservice.getCategoriasVacantes().subscribe((resp: any) => {

      resp.forEach(element => {
        element.bandera = false
      });
      this.categorias.push(...resp)

    })
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
    this._router.navigate(['/vacancies', slug]);
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
    var destino = "https://gers.com.co/backend/wp-content/themes/gers/formulario-vacantes-general/form-vacantes-general.php"; // El script que va a recibir los campos de formulario.
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
