import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { CapacitacionesService } from 'src/app/services/capacitaciones.service';

@Component({
  selector: 'app-interna-capacitacion',
  templateUrl: './interna-capacitacion.component.html',
  styleUrls: ['./interna-capacitacion.component.css']
})
export class InternaCapacitacionComponent implements OnInit {

  id: string;
  capacitacion: any;
  constructor(private activedRouter: ActivatedRoute, private capacitacionesS: CapacitacionesService) { 
    this.id = this.activedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.capacitacionesS.getCapacitacionesId(parseInt(this.id)).subscribe((resp: any) => {
      console.log(resp);
      this.capacitacion = resp;
      this.capacitacion.fecha = moment(resp.acf.fecha_inicio+' '+resp.acf.hora_inicio).format('DD MMMM YYYY hh:mm:ss a');
      let categorias = [];
      resp.categorias_capacitaciones.forEach(element => {
        this.capacitacionesS.getCategoriaCapacitacionesId(element).subscribe((respCate: any) => {
          categorias.push(respCate.name);
          this.capacitacion.categorias = categorias;
        })  
      });
      
    })
  }

}
