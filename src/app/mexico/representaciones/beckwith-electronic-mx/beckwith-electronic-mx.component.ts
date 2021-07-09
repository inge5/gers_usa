import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';

@Component({
  selector: 'app-beckwith-electronic-mx',
  templateUrl: './beckwith-electronic-mx.component.html',
  styleUrls: ['./beckwith-electronic-mx.component.css']
})
export class BeckwithElectronicMxComponent implements OnInit {
  loader = true;
  banner_data : any = {};
  seccion_1_data : any = {};
  texto_general_data: any = {};
  
  constructor(private _beckwithelectronic:PagesMxService) { }

  ngOnInit(): void {
    this._beckwithelectronic.getBeckwithElectronic()
      .subscribe((res:any) => {
        this.loader = false;
        this.banner_data = res.acf.banner;
        this.seccion_1_data = res.acf.seccion_1;
        this.texto_general_data = res.acf.texto_general;
      });
  }
}
