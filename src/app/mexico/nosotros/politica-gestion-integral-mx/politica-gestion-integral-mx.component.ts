import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';

@Component({
  selector: 'app-politica-gestion-integral-mx',
  templateUrl: './politica-gestion-integral-mx.component.html',
  styleUrls: ['./politica-gestion-integral-mx.component.css']
})
export class PoliticaGestionIntegralMxComponent implements OnInit {
  seccion_1_data: any = {};
  seccion_2_data: any = {};

  loader = true;

  constructor(private _politicagestionintegral:PagesMxService) { }

  ngOnInit(): void {
    this._politicagestionintegral.getPoliticaGestionIntegral()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_2_data = res.acf.seccion_2;
      });
  }
}
