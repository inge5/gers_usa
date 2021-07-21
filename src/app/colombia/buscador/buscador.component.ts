import { Component, OnInit } from '@angular/core';
import { CapacitacionesService } from 'src/app/services/capacitaciones.service';
import { HomeService } from 'src/app/services/home.service';
import { PagesService } from 'src/app/services/pages.service';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { VacantesService } from 'src/app/services/vacantes.service';
import { VariableGlobalService } from '../servicios/variable-global/variable-global.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  data: any[] = [];
  filtro: string = "";

  constructor(private variableG: VariableGlobalService, private _vacantesservice: VacantesService,
     private capacitaciones: CapacitacionesService, private proyectoService: HomeService, 
     private publicacionesservice:PublicacionesService, private representaciones: PagesService) { }

  ngOnInit(): void {
    this.getBusqueda();
  }

  getBusqueda(){
    this.variableG.currentBusca.subscribe(resp => {
      this.filtro = resp
      if(this.filtro !== ""){
      }
    });
    this.getVacantes();
    this.getCapacitaciones();
    this.getProyectos();
    this.getPublicaciones();
    this.getRepresentaciones();
  }

  getVacantes() {
    this._vacantesservice.getVacantes().subscribe((res: any) => {
      res.forEach(element => {
        this.data.push({
          title: element.title.rendered,
          content: element.content.rendered,
          type: 'vacantes'
        })  
      });
    })
  }
  getCapacitaciones(){
    this.capacitaciones.getCapacitaciones().subscribe((res: any) => {
      res.forEach(element => {
        this.data.push({
          title: element.title.rendered,
          content: element.acf.descripcion_larga,
          type: 'capacitaciones'
        })
      });
    })
  }
  getProyectos(){
    this.proyectoService.getProyects().subscribe(res => {
      res.forEach(element => {
        this.data.push({
          title: element.title.rendered,
          content: element.acf.descripcion,
          type: element.type
        })
      });
    })
  }
  getPublicaciones(){
    this.publicacionesservice.getPublicaciones().subscribe(res => {
      res.forEach(element => {
        this.data.push({
          title: element.title.rendered,
          content: element.content.rendered,
          type: element.type
        })
      });
    })
  }
  getRepresentaciones(){
    this.representaciones.getNeplan().subscribe(res => {
      this.data.push({
        title:res.title.rendered,
        content: res.acf.informacion_general.texto_general,
        type: res.type
      })
    })
    this.representaciones.getBeckwithElectronic().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.texto_general,
        type: res.type
      })
    })
    this.representaciones.getXGSLab().subscribe(res => {
      console.log(res); 
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_3.texto_general,
        type: res.type  
      })
    })
  }
}
