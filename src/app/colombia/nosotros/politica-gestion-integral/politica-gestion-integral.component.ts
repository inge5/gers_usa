import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../../services/pages.service';

@Component({
  selector: 'app-politica-gestion-integral',
  templateUrl: './politica-gestion-integral.component.html',
  styleUrls: ['./politica-gestion-integral.component.css']
})
export class PoliticaGestionIntegralComponent implements OnInit {

  seccion_1_data: any = {};
  seccion_2_data: any = {};

  loader = true;

  constructor(private _politicagestionintegral:PagesService) { }

  ngOnInit(): void {
    this._politicagestionintegral.getPoliticaGestionIntegral()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_2_data = res.acf.seccion_2;
      });
  }

}
