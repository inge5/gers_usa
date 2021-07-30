import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-form-cotizador-neplan',
  templateUrl: './form-cotizador-neplan.component.html',
  styleUrls: ['./form-cotizador-neplan.component.css']
})
export class FormCotizadorNeplanComponent implements OnInit {

  @Input() titulo: string = "";
  @Input() subTitulo: string ="";
  constructor() { }

  ngOnInit(): void {
  }

  volverNeplan(){
    $('#neplan-cotizador').addClass('cerrar-formulario');
  }

}
