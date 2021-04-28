import { PagesService } from '../../../services/pages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xgslab',
  templateUrl: './xgslab.component.html',
  styleUrls: ['./xgslab.component.css']
})
export class XgslabComponent implements OnInit {
  loader = true;
  banner_data : any = {};
  seccion_1_data : any = {};
  seccion_2_data: any = {};
  modulo_data: any[] = [];
  seccion_3_data: any = {};


  constructor(private _xgslab:PagesService) { }

  ngOnInit(): void {
    this._xgslab.getXGSLab()
      .subscribe((res:any) => {
        this.loader = false;
        this.banner_data = res.acf.banner;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_2_data = res.acf.seccion_2;
        this.modulo_data = res.acf.seccion_2.modulo;
        this.seccion_3_data = res.acf.seccion_3;
      });
  }
  
}
