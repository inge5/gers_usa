import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../../services/pages.service';

@Component({
  selector: 'app-dranetz',
  templateUrl: './dranetz.component.html',
  styleUrls: ['./dranetz.component.css']
})
export class DranetzComponent implements OnInit {
  loader = true;
  banner_data : any = {};
  seccion_1_data : any = {};
  item_tab_data: any[] = [];
  public activePillIndex:number = 0;


  constructor(private _dranetz:PagesService) { }

  ngOnInit(): void {
    this._dranetz.getDranetz()
      .subscribe((res:any) => {
        this.loader = false;
        this.banner_data = res.acf.banner;
        this.seccion_1_data = res.acf.seccion_1;
        this.item_tab_data = res.acf.item_tab;
      });
  }

  public selectPill(index:number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
   }

}
