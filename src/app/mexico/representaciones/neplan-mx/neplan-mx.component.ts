import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';

@Component({
  selector: 'app-neplan-mx',
  templateUrl: './neplan-mx.component.html',
  styleUrls: ['./neplan-mx.component.css']
})
export class NeplanMxComponent implements OnInit {
  loader = true;
  banner_data : any = {};
  item_tab_data: any[] = [];
  repetidor_botones_data: any[] = [];
  info_data: any = {};
  public activePillIndex:number = 0;

  constructor(private _neplan:PagesMxService) { }

  ngOnInit(): void {
    this._neplan.getNeplan()
      .subscribe((res:any) => {
        this.loader = false;
        this.banner_data = res.acf.banner;
        this.item_tab_data = res.acf.item_tab;
        this.repetidor_botones_data = res.acf.item_tab.repetidor_botones;
        this.info_data = res.acf.informacion_general;
      });
  }

  public selectPill(index:number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
   }

}
