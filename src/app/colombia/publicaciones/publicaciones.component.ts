import { Component, OnInit } from '@angular/core';

import { PublicacionesService } from '../../services/publicaciones.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  loader = true;
  publicaciones_data:any[] = [];

  constructor(private _router:Router, private _publicacionesservice:PublicacionesService) { }

  ngOnInit(): void {
    this._publicacionesservice.getPublicaciones()
    .subscribe((res:any) => {
      this.loader = false;
      this.publicaciones_data = res;
    });
  }

  verPublicaciones(slug:string){
    this._router.navigate(['/publicaciones', slug]);
  }

}
