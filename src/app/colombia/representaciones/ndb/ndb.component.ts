import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../../services/pages.service';

@Component({
  selector: 'app-ndb',
  templateUrl: './ndb.component.html',
  styleUrls: ['./ndb.component.css']
})
export class NdbComponent implements OnInit {
  loader = true;
  banner_data : any = {};
  seccion_1_data : any = {};
  seccion_2_data : any = {};
  item_tab_data: any[] = [];
  public activePillIndex:number = 0;

  constructor(private _ndb:PagesService) { }
  
  ngOnInit(): void {
    this._ndb.getNdb()
      .subscribe((res:any) => {
        this.loader = false;
        this.banner_data = res.acf.banner;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_2_data = res.acf.seccion_2;
        this.item_tab_data = res.acf.seccion_2.item_tab;
      });
  }

  public selectPill(index:number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
   }

}
