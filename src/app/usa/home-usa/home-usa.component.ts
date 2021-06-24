import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HomeUsaService } from '../../services/home-usa.service';
import { PagesUsaService } from '../../services/pages-usa.service';



@Component({
  selector: 'app-home-usa',
  templateUrl: './home-usa.component.html',
  styleUrls: ['./home-usa.component.css']
})
export class HomeUsaComponent implements OnInit {
  sliderprincipal_data:any = [];
  generando_soluciones_data: any[] = [];
  proyectos_realizados_data: any[] = [];
  titulo_servicios_eficientes_data:any[] = [];
  lets_work_data: any = [];
  servicios_eficientes_data:any[] = [];
  tituloproyectos:any[] = [];
  tituloInternacional:any[] = [];
  paisesInternacionales:any[] = [];
  nuestrosClientes:any[] = [];
  equipoTrabajo:any[] = [];
  vacantes:any[] = [];
  loader = true;

  FeaturedProyects:any[] = [];

  constructor(private _homeUsaService:HomeUsaService, private _proyectosusa:PagesUsaService) { }

    ngOnInit(): void {
      this._homeUsaService.getHomeUsa()
      .subscribe((res:any) => {
        this.loader = false;
        this.sliderprincipal_data = res.acf.slider_principal;
        this.generando_soluciones_data = res.acf.generando_soluciones;
        this.proyectos_realizados_data = res.acf.proyectos_realizados; 
        this.titulo_servicios_eficientes_data = res.acf.titulo_servicios_eficientes; 
        this.lets_work_data = res.acf.lets_work;
        this.servicios_eficientes_data = res.acf.servicios_eficientes;
        this.tituloproyectos = res.acf.titulo_proyectos;
        this.tituloInternacional = res.acf.titulo_contactos_internacionales;
        this.paisesInternacionales = res.acf.paises_internacionales;
        this.nuestrosClientes = res.acf.clientes;
        this.equipoTrabajo = res.acf.equipo_de_trabajo;
        this.vacantes = res.acf.vacantes;
    });

    this._proyectosusa.getProyectsUsa()
    .subscribe((res:any) => {
      this.FeaturedProyects = res;
    });
  }
}
