import { Component, OnInit } from '@angular/core';
import { PagesUsaService } from '../../../services/pages-usa.service';


@Component({
  selector: 'app-power-system-studies',
  templateUrl: './power-system-studies.component.html',
  styleUrls: ['./power-system-studies.component.css']
})
export class PowerSystemStudiesComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  item_tab_data: any[] = [];
  public activePillIndex:number = 0;

  constructor(private _powersystemstudies:PagesUsaService) { }

  ngOnInit(): void {
    this._powersystemstudies.getPowerSystemStudies()
    .subscribe((res:any)=>{
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
