import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';

@Component({
  selector: 'app-analisis-calidad-energia-mx',
  templateUrl: './analisis-calidad-energia-mx.component.html',
  styleUrls: ['./analisis-calidad-energia-mx.component.css']
})
export class AnalisisCalidadEnergiaMxComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];
  texto_final_data: any = {};

  constructor(private _serviciosenergeticos:PagesMxService) { }

  ngOnInit(): void {
    this._serviciosenergeticos.getServiciosEnergeticos()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
        this.texto_final_data = res.acf.texto_final;
      });
  }

}
