import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HomeUsaService } from '../../services/home-usa.service';


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
  loader = true;

  constructor(private _homeUsaService:HomeUsaService) { }

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
    });
  }
}
