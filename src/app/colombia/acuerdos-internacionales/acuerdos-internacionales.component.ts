import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-acuerdos-internacionales',
  templateUrl: './acuerdos-internacionales.component.html',
  styleUrls: ['./acuerdos-internacionales.component.css']
})
export class AcuerdosInternacionalesComponent implements OnInit {
  loader = true;
  item_tab_data : any[] = [];
  imagen_columnas_data: any = {};
  public activePillIndex:number = 0;

  constructor(private _acuerdosinternacionales:PagesService) { }

  ngOnInit(): void {
    this._acuerdosinternacionales.getAcuerdosInternacionales()
      .subscribe((res:any) => {
        this.loader = false;
        this.item_tab_data = res.acf.item_tab;
        this.imagen_columnas_data = res.acf.item_tab.imagen_columnas;

      });
  }

  public selectPill(index:number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
   }

}


