import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicacionesMxService } from 'src/app/services/publicaciones-mx.service';

@Component({
  selector: 'app-publicacion-interna-mx',
  templateUrl: './publicacion-interna-mx.component.html',
  styleUrls: ['./publicacion-interna-mx.component.css']
})
export class PublicacionInternaMxComponent implements OnInit {

  publicacion_data:any = {};
  loader = true;

  constructor(private route: ActivatedRoute, private _publicacionservice:PublicacionesMxService) { }

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
