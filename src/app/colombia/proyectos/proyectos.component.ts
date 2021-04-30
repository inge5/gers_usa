import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { PagesService } from '../../services/pages.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  FeaturedProyects:any[] = [];
  titulo_pagina_data: any;

  loader = true;

  constructor(private _proyectosService:HomeService,private _proyectosPageService:PagesService) { }

  ngOnInit(): void {
    this._proyectosService.getProyects()
      .subscribe((res:any) => {
        this.loader = false;
        this.FeaturedProyects = res;
      });  
      this._proyectosPageService.getProyectosPage()
      .subscribe((res:any) => {
        this.loader = false;
        this.titulo_pagina_data = res.acf.titulo_pagina;
      });  
  }

}
