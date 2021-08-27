import { Component, OnInit } from '@angular/core';
import { VariableGlobalService } from 'src/app/colombia/servicios/variable-global/variable-global.service';
import { CapacitacionesService } from 'src/app/services/capacitaciones.service';
import { HomeClService } from 'src/app/services/home-cl.service';
import { PagesClService } from 'src/app/services/pages-cl.service';
import { PublicacionesClService } from 'src/app/services/publicaciones-cl.service';
import { VacantesClService } from 'src/app/services/vacantes-cl.service';

@Component({
  selector: 'app-buscador-cl',
  templateUrl: './buscador-cl.component.html',
  styleUrls: ['./buscador-cl.component.css']
})
export class BuscadorClComponent implements OnInit {
  data: any[] = [];
  filtro: string = "";

  constructor(private variableG: VariableGlobalService, private _vacantesservice: VacantesClService,
    private capacitaciones: CapacitacionesService, private proyectoService: HomeClService, 
    private publicacionesservice:PublicacionesClService, private representaciones: PagesClService) { }

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
          type: 'vacantes',
          slug: element.slug
        })  
      });
    })
  }
  getCapacitaciones(){
    this.capacitaciones.getCapacitacionesChile().subscribe((res: any) => {
      res.forEach(element => {
        this.data.push({
          title: element.title.rendered,
          content: element.acf.descripcion_corta,
          type: 'capacitaciones',
          slug: element.id
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
          type: element.type,
          slug: element.slug
        })
      });
    })
  }
  getPublicaciones(){
    this.publicacionesservice.getPublicaciones().subscribe(res => {
      res.forEach(element => {
        this.data.push({
          title: element.title.rendered,
          content: element.acf.descripcion,
          type: element.type,
          slug: element.slug
        })
      });
    })
  }
  getRepresentaciones(){
    this.representaciones.getNeplan().subscribe(res => {
      this.data.push({
        title:res.title.rendered,
        content: res.acf.descripcion,
        type: res.type,
        slug: res.slug
      })
    })
    this.representaciones.getXgslab().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.descripcion,
        type: res.type,
        slug: res.slug
      })
    })
  }
  getServicios(){
    this.representaciones.getPruebasAutomatizacionControl().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_principal,
        type: 'servicios',
        slug: res.slug
      })
    })
    this.representaciones.getDisenoIngenieria().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_principal,
        type: 'servicios',
        slug: res.slug
      })
    })
    this.representaciones.getEstudioSistemasElectricos().subscribe(res => {
      this.data.push({
        title: res.title.rendered,
        content: res.acf.seccion_1.texto_principal,
        type: 'servicios',
        slug: res.slug
      })
    })
  }

}
