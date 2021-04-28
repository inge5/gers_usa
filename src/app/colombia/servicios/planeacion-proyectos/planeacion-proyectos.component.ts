import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../../services/pages.service';


@Component({
  selector: 'app-planeacion-proyectos',
  templateUrl: './planeacion-proyectos.component.html',
  styleUrls: ['./planeacion-proyectos.component.css']
})
export class PlaneacionProyectosComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];

  constructor(private _planeacionproyectos:PagesService) { }

  ngOnInit(): void {
    this._planeacionproyectos.getPlaneacionProyectos()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
      });
  }

}
