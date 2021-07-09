import { Component, OnInit } from '@angular/core';
import { PagesClService } from '../../../services/pages-cl.service';


@Component({
  selector: 'app-pruebas-automatizacion-control-cl',
  templateUrl: './pruebas-automatizacion-control-cl.component.html',
  styleUrls: ['./pruebas-automatizacion-control-cl.component.css']
})
export class PruebasAutomatizacionControlClComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];
  primer_icono_data: any = {};
  texto_columna_1_data: any = {};
  texto_columna_2_data: any = {};

  constructor(private _pruebasautomatizacioncontrol:PagesClService) { }

  ngOnInit(): void {
    this._pruebasautomatizacioncontrol.getPruebasAutomatizacionControl()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
        this.primer_icono_data = res.acf.primer_icono;
        this.texto_columna_1_data = res.acf.texto_columna_1;
        this.texto_columna_2_data = res.acf.texto_columna_2;
      });
  }

}
