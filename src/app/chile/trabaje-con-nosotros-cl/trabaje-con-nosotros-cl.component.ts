import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VacantesClService } from '../../services/vacantes-cl.service';
import { Router } from '@angular/router'; 

import Swal from 'sweetalert2/dist/sweetalert2.js';

declare var $ : any; 

@Component({
  selector: 'app-trabaje-con-nosotros-cl',
  templateUrl: './trabaje-con-nosotros-cl.component.html',
  styleUrls: ['./trabaje-con-nosotros-cl.component.css']
})
export class TrabajeConNosotrosClComponent implements OnInit {
  public usuario: any;

  loader = true;
  vacantes_data:any[];
  categorias: any[] = [];
  horarioVacante: any[];
  filtrar: any[];
  vacantes_dataTemp: any;
  horarioVacanteTemp: any[];
  bandera: boolean = false;

  constructor(private _router:Router, private _vacantesservice:VacantesClService) { 
    this.usuario = {
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
    this.getVacantes();
    this.getCategoriasFiltro();
  }

  getVacantes() {
    if (!this.vacantes_data) {
      this._vacantesservice.getVacantes()
        .subscribe((res: any) => {
          this.loader = false;
          this.vacantes_data = res;
          console.log(res);

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
        element.categoria_vacantes.filter(filtroCate => {
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
            console.log("vacio");
            this.filtrar = [];
          }
          this.bandera = true;
          this.filtrar.push(element);
        }
      })
    })

    if (this.filtrar.length > 0) {
      // console.log(this.filtrar);
      this.vacantes_data = this.filtrar;

      // console.log(this.eventosFiltro);
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
      // console.log(this.eventos);
      this.getVacantes();
    }
  }

  getCategoriasFiltro() {
    this._vacantesservice.getCategoriasVacantes().subscribe((resp: any) => {
      // console.log(resp);
      resp.forEach(element => {
        element.bandera = false
      });
      this.categorias.push(...resp)
      console.log(this.categorias);
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
    this._router.navigate(['/chile/vacantes', slug]);
  }

  formTrabajeNosotros(form){
    $.ajax({
      //url: 'https://pruebasneuro.co/N-1057backgane/wp-content/themes/gane/suscribirse.php',
      type: 'POST',
      data: JSON.stringify(this.usuario),
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
