import { Component, OnInit } from '@angular/core';
import { PagesClService } from '../../../services/pages-cl.service';

@Component({
  selector: 'app-politica-gestion-integral-cl',
  templateUrl: './politica-gestion-integral-cl.component.html',
  styleUrls: ['./politica-gestion-integral-cl.component.css']
})
export class PoliticaGestionIntegralClComponent implements OnInit {

  seccion_1_data: any = {};
  seccion_2_data: any = {};

  loader = true;

  constructor(private _politicagestionintegralcl:PagesClService) { }

  ngOnInit(): void {
    this._politicagestionintegralcl.getPoliticaGestionIntegral()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_2_data = res.acf.seccion_2;
      });
  }

}
