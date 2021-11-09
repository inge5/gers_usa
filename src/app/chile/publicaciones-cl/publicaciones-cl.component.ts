import { Component, OnInit } from '@angular/core';

import { PublicacionesClService } from '../../services/publicaciones-cl.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-publicaciones-cl',
  templateUrl: './publicaciones-cl.component.html',
  styleUrls: ['./publicaciones-cl.component.css']
})
export class PublicacionesClComponent implements OnInit {

  loader = true;
  publicaciones_data:any[] = [];

  constructor(private _router:Router, private _publicacionesservice:PublicacionesClService) { 
  }

  ngOnInit(): void {
    this._publicacionesservice.getPublicaciones()
    .subscribe((res:any) => {
      this.loader = false;
      this.publicaciones_data = res;
    });
  }

  verPublicaciones(slug:string){
    this._router.navigate(['/publicaciones-cl', slug]);
  }
  
}
