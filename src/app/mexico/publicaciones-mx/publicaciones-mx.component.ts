import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionesMxService } from '../../services/publicaciones-mx.service';

@Component({
  selector: 'app-publicaciones-mx',
  templateUrl: './publicaciones-mx.component.html',
  styleUrls: ['./publicaciones-mx.component.css']
})
export class PublicacionesMxComponent implements OnInit {

  loader = true;
  publicaciones_data:any[] = [];

  constructor(private _router:Router, private _publicacionesservice:PublicacionesMxService) { }

  ngOnInit(): void {
    this._publicacionesservice.getPublicaciones()
    .subscribe((res:any) => {
      this.loader = false;
      this.publicaciones_data = res;
    });
  }

  verPublicaciones(slug:string){
    this._router.navigate(['/mexico/publicaciones', slug]);
  }

}
