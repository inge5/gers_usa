import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-form-demostracion',
  templateUrl: './form-demostracion.component.html',
  styleUrls: ['./form-demostracion.component.css']
})
export class FormDemostracionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  volverLista(){
    $('#demostracion').addClass('cerrar-formulario');
  }

}
