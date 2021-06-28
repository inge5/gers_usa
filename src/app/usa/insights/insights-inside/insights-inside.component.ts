import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicacionesUsaService } from '../../../services/publicaciones-usa.service';


@Component({
  selector: 'app-insights-inside',
  templateUrl: './insights-inside.component.html',
  styleUrls: ['./insights-inside.component.css']
})
export class InsightsInsideComponent implements OnInit {

  publicacion_data:any = {};
  loader = true;

  constructor(private route: ActivatedRoute, private _publicacionusaservice:PublicacionesUsaService) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this._publicacionusaservice.getPublicacion(slug)
      .subscribe(res => {
        this.loader = false;
        this.publicacion_data = res;
        for(let publicacion of res){
          this.publicacion_data = publicacion;
        }
      })
  }

}
