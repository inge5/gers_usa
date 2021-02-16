import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sliderprincipal_data:any[] = [];
  generando_soluciones_data:any[] = [];
  proyectos_realizados_data:any[] = [];
  titulo_servicios_eficientes_data:any[] = [];
  servicios_eficientes_data:any[] = [];
  ejecucion_de_monitoreo_data:any[] = [];
  tabs_data:any[] = [];
  titulo_marcas_data:any[] = [];
  marcas_datas:any[] = [];
  Images:any[] = [];
  tituloproyectos:any[] = [];
  FeaturedProyects:any[] = [];
  tituloInternacional:any[] = [];
  paisesInternacionales:any[] = [];
  nuestrosClientes:any[] = [];
  equipoTrabajo:any[] = [];
  vacantes:any[] = [];

  constructor(private _homeService:HomeService) { 
  }

  ngOnInit(): void {
    this._homeService.getHome()
      .subscribe((res:any) => {
        this.sliderprincipal_data = res.acf.slider_principal;
        this.generando_soluciones_data = res.acf.generando_soluciones;
        this.proyectos_realizados_data = res.acf.proyectos_realizados; 
        this.titulo_servicios_eficientes_data = res.acf.titulo_servicios_eficientes; 
        this.servicios_eficientes_data = res.acf.servicios_eficientes; 
        this.ejecucion_de_monitoreo_data = res.acf.ejecucion_de_monitoreo; 
        this.tabs_data = res.acf.tabs;
        this.titulo_marcas_data = res.acf.titulo_marcas;
        this.marcas_datas = res.acf.marcas;
        this.tituloproyectos = res.acf.titulo_proyectos;
        this.tituloInternacional = res.acf.titulo_contactos_internacionales;
        this.paisesInternacionales = res.acf.paises_internacionales;
        this.nuestrosClientes = res.acf.clientes;
        this.equipoTrabajo = res.acf.equipo_de_trabajo;
        this.vacantes = res.acf.vacantes;
      });
      this._homeService.getProyects()
      .subscribe((res:any) => {
        this.FeaturedProyects = res;
      });  
    }
}

