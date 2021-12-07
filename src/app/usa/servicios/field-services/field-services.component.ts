import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';
import { PagesUsaService } from '../../../services/pages-usa.service';

@Component({
  selector: 'app-field-services',
  templateUrl: './field-services.component.html',
  styleUrls: ['./field-services.component.css']
})
export class FieldServicesComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  item_tab_data: any[] = [];
  public activePillIndex:number = 0;

  constructor(private _fieldservices:PagesUsaService, private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.paginaDisenoIng();
    this._fieldservices.getFieldServices()
    .subscribe((res:any) => {
      this.loader = false;
      this.seccion_1_data = res.acf.seccion_1;
      this.item_tab_data = res.acf.item_tab;
    });
  }

  public selectPill(index:number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
   }

}
