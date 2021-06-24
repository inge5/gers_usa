import { Component, OnInit } from '@angular/core';
import { PagesUsaService } from '../../../services/pages-usa.service';

@Component({
  selector: 'app-neplan-usa',
  templateUrl: './neplan-usa.component.html',
  styleUrls: ['./neplan-usa.component.css']
})
export class NeplanUsaComponent implements OnInit {
  loader = true;
  banner_data : any = {};
  item_tab_data: any[] = [];
  repetidor_botones_data: any[] = [];
  public activePillIndex:number = 0;


  constructor(private _neplan:PagesUsaService) { }

  ngOnInit(): void {
    this._neplan.getNeplanUsa()
      .subscribe((res:any) => {
        this.loader = false;
        this.banner_data = res.acf.banner;
        this.item_tab_data = res.acf.item_tab;
        this.repetidor_botones_data = res.acf.item_tab.repetidor_botones;
      });
  }

  public selectPill(index:number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
   }
}
