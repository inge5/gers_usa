import { Component, OnInit } from '@angular/core';
import { VariableGlobalService } from 'src/app/colombia/servicios/variable-global/variable-global.service';
import { CapacitacionesService } from 'src/app/services/capacitaciones.service';
import { HomeMxService } from 'src/app/services/home-mx.service';
import { PagesMxService } from 'src/app/services/pages-mx.service';
import { PublicacionesMxService } from 'src/app/services/publicaciones-mx.service';
import { VacantesMxService } from 'src/app/services/vacantes-mx.service';

@Component({
  selector: 'app-buscador-mx',
  templateUrl: './buscador-mx.component.html',
  styleUrls: ['./buscador-mx.component.css']
})
export class BuscadorMxComponent implements OnInit {

  data: any[] = [];
  filtro: string = "";

  constructor(private variableG: VariableGlobalService, private _vacantesservice: VacantesMxService,
    private capacitaciones: CapacitacionesService, private proyectoService: HomeMxService, 
    private publicacionesservice:PublicacionesMxService, private representaciones: PagesMxService) { }

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
      this.capacitaciones.getCapacitacionesMexico().subscribe((res: any) => {
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
        console.log(res);
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
      this.representaciones.getBeckwithElectronic().subscribe(res => {
        this.data.push({
          title: res.title.rendered,
          content: res.acf.descripcion,
          type: res.type,
          slug: res.slug
        })
      })
      this.representaciones.getXGSLab().subscribe(res => {
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
      this.representaciones.getServiciosEnergeticos().subscribe(res => {
        this.data.push({
          title: res.title.rendered,
          content: res.acf.seccion_1.texto_principal,
          type: 'servicios',
          slug: res.slug
        })
      })
      this.representaciones.getPlaneacionProyectos().subscribe(res => {
        this.data.push({
          title: res.title.rendered,
          content: res.acf.seccion_1.texto_principal,
          type: 'servicios',
          slug: res.slug
        })
      })
      this.representaciones.getInterventoriaAsesoria().subscribe(res => {
        this.data.push({
          title: res.title.rendered,
          content: res.acf.seccion_1.texto_principal,
          type: 'servicios',
          slug: res.slug
        })
      })
      this.representaciones.getSmartGrids().subscribe(res => {
        this.data.push({
          title: res.title.rendered,
          content: res.acf.seccion_1.texto_principal,
          type: 'servicios',
          slug: res.slug
        })
      })
    }

}
