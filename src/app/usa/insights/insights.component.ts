import { Component, OnInit } from '@angular/core';

import { PublicacionesUsaService } from '../../services/publicaciones-usa.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {
  loader = true;
  publicaciones_data:any[] = [];

  constructor(private _router:Router, private _publicacionesusaservice:PublicacionesUsaService) { }

  ngOnInit(): void {
    this._publicacionesusaservice.getPublicaciones()
    .subscribe((res:any) => {
      this.loader = false;
      this.publicaciones_data = res;
    });
  }

  verPublicaciones(slug:string){
    this._router.navigate(['/insights', slug]);
  }

}
