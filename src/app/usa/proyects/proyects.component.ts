import { Component, OnInit } from '@angular/core';
import { PagesUsaService } from '../../services/pages-usa.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  FeaturedProyects:any[] = [];
  loader = true;

  constructor(private _proyectosusa:PagesUsaService) { }

  ngOnInit(): void {
    this._proyectosusa.getProyectsUsa()
    .subscribe((res:any) => {
      this.loader = false;
      this.FeaturedProyects = res;
    });
  }

}
