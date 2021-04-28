import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../../services/pages.service';

@Component({
  selector: 'app-smart-grids',
  templateUrl: './smart-grids.component.html',
  styleUrls: ['./smart-grids.component.css']
})
export class SmartGridsComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];
  item_tab_data: any[] = [];
  public activePillIndex:number = 0;

  constructor(private _smartgrid:PagesService) { }

  ngOnInit(): void {
    this._smartgrid.getSmartGrids()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
        this.item_tab_data = res.acf.item_tab;
        
      });
  }

  public selectPill(index:number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
   }

}
