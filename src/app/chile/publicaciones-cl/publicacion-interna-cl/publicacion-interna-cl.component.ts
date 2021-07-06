import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicacionesClService } from '../../../services/publicaciones-cl.service';

@Component({
  selector: 'app-publicacion-interna-cl',
  templateUrl: './publicacion-interna-cl.component.html',
  styleUrls: ['./publicacion-interna-cl.component.css']
})
export class PublicacionInternaClComponent implements OnInit {

  publicacion_data:any = {};
  loader = true;

  constructor(private route: ActivatedRoute, private _publicacionservice:PublicacionesClService) { }

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
