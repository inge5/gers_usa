import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';

@Component({
  selector: 'app-tercerias-asesorias-mx',
  templateUrl: './tercerias-asesorias-mx.component.html',
  styleUrls: ['./tercerias-asesorias-mx.component.css']
})
export class TerceriasAsesoriasMxComponent implements OnInit {

  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];

  constructor(private interventoriasasesorias:PagesMxService) { }

  ngOnInit(): void {
    this.interventoriasasesorias.getInterventoriaAsesoria()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
      });
  }

}
