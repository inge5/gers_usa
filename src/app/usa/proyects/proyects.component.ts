import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';
import { PagesUsaService } from '../../services/pages-usa.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  FeaturedProyects:any[] = [];
  titulo_pagina_data: any;
  
  loader = true;

  constructor(private _proyectosusa:PagesUsaService, private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.paginaProyectos();
    this._proyectosusa.getProyectsUsa()
    .subscribe((res:any) => {
      this.loader = false;
      this.FeaturedProyects = res;
    });
    this._proyectosusa.getProyects()
    .subscribe((res:any) =>{
      this.loader = false;
      this.titulo_pagina_data = res.acf.titulo_pagina;
    })


  }

}
