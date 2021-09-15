import { Component, OnInit } from '@angular/core';
import { VariableGlobalService } from 'src/app/colombia/servicios/variable-global/variable-global.service';
import { CapacitacionesService } from 'src/app/services/capacitaciones.service';
import { HomeUsaService } from 'src/app/services/home-usa.service';
import { PagesUsaService } from 'src/app/services/pages-usa.service';
import { PublicacionesUsaService } from 'src/app/services/publicaciones-usa.service';
import { VacantesUsaService } from 'src/app/services/vacantes-usa.service';

@Component({
  selector: 'app-buscador-usa',
  templateUrl: './buscador-usa.component.html',
  styleUrls: ['./buscador-usa.component.css']
})
export class BuscadorUsaComponent implements OnInit {

  data: any[] = [];
  filtro: string = "";

  constructor(private variableG: VariableGlobalService, private _vacantesservice: VacantesUsaService,
    private capacitaciones: CapacitacionesService, private proyectoService: HomeUsaService, 
    private publicacionesservice:PublicacionesUsaService, private representaciones: PagesUsaService) { }

    ngOnInit(): void {
      this.getBusqueda();
      this.getVacantes();
      this.getCapacitaciones();
      // this.getProyectos();
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
      this._vacantesservice.getVacancies().subscribe((res: any) => {
        res.forEach(element => {
          this.data.push({
            title: element.title.rendered,
            content: element.content.rendered,
            type: element.type,
            slug: element.slug
          })  
        });
      })
    }
    getCapacitaciones(){
      this.capacitaciones.getCapacitacionesUsa().subscribe((res: any) => {
        res.forEach(element => {
          this.data.push({
            title: element.title.rendered,
            content: element.acf.descripcion_corta,
            type: 'trainings',
            slug: element.id
          })
        });
      })
    }
    // getProyectos(){
    //   this.proyectoService.getHomeUsa().subscribe(res => {
    //     res.forEach(element => {
    //       this.data.push({
    //         title: element.title.rendered,
    //         content: element.acf.descripcion,
    //         type: element.type,
    //         slug: element.slug
    //       })
    //     });
    //   })
    // }
    getPublicaciones(){
      this.publicacionesservice.getPublicaciones().subscribe(res => {
        res.forEach(element => {
          this.data.push({
            title: element.title.rendered,
            content: element.acf.descripcion,
            type: 'insights',
            slug: element.slug
          })
        });
      })
    }
    getRepresentaciones(){
      this.representaciones.getNeplanUsa().subscribe(res => {

        this.data.push({
          title:res.title.rendered,
          content: res.acf.descripcion,
          type: 'representations',
          slug: res.slug
        })
      })
    }

    getServicios(){
      this.representaciones.getPowerSystemStudies().subscribe(res => {
        this.data.push({
          title: res.title.rendered,
          content: res.acf.seccion_1.texto_principal,
          type: 'services',
          slug: res.slug
        })
      })
      this.representaciones.getProtectionAndControl().subscribe(res => {
        this.data.push({
          title: res.title.rendered,
          content: res.acf.seccion_1.texto_principal,
          type: 'services',
          slug: res.slug
        })
      })
      this.representaciones.getSmartGridsUsa().subscribe(res => {
        this.data.push({
          title: res.title.rendered,
          content: res.acf.seccion_1.texto_principal,
          type: 'services',
          slug: res.slug
        })
      })
      this.representaciones.getFieldServices().subscribe(res => {
        this.data.push({
          title: res.title.rendered,
          content: res.acf.seccion_1.texto_principal,
          type: 'services',
          slug: res.slug
        })
      })
    }

}
