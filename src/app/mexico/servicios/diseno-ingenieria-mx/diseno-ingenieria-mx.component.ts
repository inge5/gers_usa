import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';

@Component({
  selector: 'app-diseno-ingenieria-mx',
  templateUrl: './diseno-ingenieria-mx.component.html',
  styleUrls: ['./diseno-ingenieria-mx.component.css']
})
export class DisenoIngenieriaMxComponent implements OnInit {

  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];
  item_tab_data: any[] = [];
  texto_columna_1_data:any = {};
  texto_columna_2_data:any = {};
  public activePillIndex:number = 0;

  constructor(private disenoingenieria:PagesMxService) { }

  ngOnInit(): void {
    this.disenoingenieria.getDisenoIngenieria()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
        this.item_tab_data = res.acf.item_tab;
        this.texto_columna_1_data = res.acf.texto_columna_1;
        this.texto_columna_2_data = res.acf.texto_columna_2;
      });
  }

  public selectPill(index:number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
   }

}
