import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../../services/pages.service';
declare var $: any;

@Component({
  selector: 'app-neplan',
  templateUrl: './neplan.component.html',
  styleUrls: ['./neplan.component.css']
})
export class NeplanComponent implements OnInit {
  loader = true;
  banner_data : any = {};
  item_tab_data: any[] = [];
  repetidor_botones_data: any[] = [];
  info_data: any = {};
  public activePillIndex:number = 0;


  constructor(private _neplan:PagesService) { }

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

   abrirDemostrador(){
     $('#demostracion').removeClass('cerrar-formulario');
   }
   abrirCotizador(){
     $('#neplan-cotizador').removeClass('cerrar-formulario');
   }
}
