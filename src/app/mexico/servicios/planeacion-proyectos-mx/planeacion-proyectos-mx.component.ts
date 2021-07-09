import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';

@Component({
  selector: 'app-planeacion-proyectos-mx',
  templateUrl: './planeacion-proyectos-mx.component.html',
  styleUrls: ['./planeacion-proyectos-mx.component.css']
})
export class PlaneacionProyectosMxComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];

  constructor(private _planeacionproyectos:PagesMxService) { }

  ngOnInit(): void {
    this._planeacionproyectos.getPlaneacionProyectos()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
      });
  }

}
