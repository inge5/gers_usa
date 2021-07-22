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
    this.getVacantes();
    this.getCapacitaciones();
    this.getProyectos();
    this.getPublicaciones();
    this.getRepresentaciones();
    this.getServicios();
  }

  getBusqueda(){
    this.variableG.currentBusca.subscribe(resp => {
      this.filtro = resp
    });
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
          content: element.acf.descripcion_corta,
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
      console.log(res);
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
        content: res.acf.seccion_1.texto_inicial,
        type: res.type
      })
    })
    this.representaciones.getXGSLab().subscribe(res => { 
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_inicial,
        type: res.type  
      })
    })
    this.representaciones.getDranetz().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_inicial,
        type: res.type
      })
    })
    this.representaciones.getNdb().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_inicial,
        type: res.type
      })
    })
  }
  getServicios(){
    this.representaciones.getPruebasAutomatizacionControl().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_principal,
        type: 'servicios'
      })
    })
    this.representaciones.getDisenoIngenieria().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_principal,
        type: 'servicios'
      })
    })
    this.representaciones.getSmartGrids().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_principal,
        type: 'servicios'
      })
    })
    this.representaciones.getEstudioSistemasElectricos().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_principal,
        type: 'servicios'
      })
    })
    this.representaciones.getServiciosEnergeticos().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_principal,
        type: 'servicios'
      })
    })
  }
}
