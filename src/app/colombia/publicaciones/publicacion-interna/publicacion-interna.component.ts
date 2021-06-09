import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicacionesService } from '../../../services/publicaciones.service';

@Component({
  selector: 'app-publicacion-interna',
  templateUrl: './publicacion-interna.component.html',
  styleUrls: ['./publicacion-interna.component.css']
})
export class PublicacionInternaComponent implements OnInit {

  publicacion_data:any = {};
  loader = true;

  constructor(private route: ActivatedRoute, private _publicacionservice:PublicacionesService) {  }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this._publicacionservice.getPublicacion(slug)
      .subscribe(res => {
        this.loader = false;
        this.publicacion_data = res;
        for(let publicacion of res){
          this.publicacion_data = publicacion;
        }
      })
  }

}
