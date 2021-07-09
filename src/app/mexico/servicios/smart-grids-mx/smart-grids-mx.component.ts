import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';

@Component({
  selector: 'app-smart-grids-mx',
  templateUrl: './smart-grids-mx.component.html',
  styleUrls: ['./smart-grids-mx.component.css']
})
export class SmartGridsMxComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];
  item_tab_data: any[] = [];
  public activePillIndex:number = 0;


  constructor(private _smartgrid:PagesMxService) { }

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
