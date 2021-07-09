import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';

@Component({
  selector: 'app-pensamiento-corporativo-mx',
  templateUrl: './pensamiento-corporativo-mx.component.html',
  styleUrls: ['./pensamiento-corporativo-mx.component.css']
})
export class PensamientoCorporativoMxComponent implements OnInit {

  proposito_empresa_data: any[] = [];
  valor_corporativo_columna1_data: any[] = [];
  valor_corporativo_columna2_data: any[] = [];
  imagen_proposito_data: any;
  titulo_valores_data: any;
  seccion_compromisos_data: any = {};
  seccion_propuesta_data: any = {};
  titulo_pilares_data: any;
  pilar_data: any[] = [];
  mapa_procesos_data: any;


  loader = true;

  constructor(private httpClient:HttpClient, private _pensamientocorporativo:PagesMxService) { }

  ngOnInit(): void {
    this._pensamientocorporativo.getPensamientoCorporativo()
      .subscribe((res:any) => {
        this.loader = false;
        this.proposito_empresa_data = res.acf.proposito_empresa;
        this.imagen_proposito_data = res.acf.imagen_proposito;
        this.titulo_valores_data = res.acf.titulo_valores;
        this.valor_corporativo_columna1_data = res.acf.valor_corporativo_columna1;
        this.valor_corporativo_columna2_data = res.acf.valor_corporativo_columna2;
        this.seccion_compromisos_data= res.acf.seccion_compromisos;
        this.seccion_propuesta_data= res.acf.seccion_propuesta;
        this.titulo_pilares_data= res.acf.titulo_pilares;
        this.pilar_data = res.acf.pilar;
        this.mapa_procesos_data = res.acf.mapa_procesos;        
        // console.log(res);
      });
      
  }

}
