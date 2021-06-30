import { Component, OnInit, ViewChild } from '@angular/core';
import { Calendar, CalendarOptions, EventInput, FullCalendarComponent } from '@fullcalendar/angular';
import LocalEs from '@fullcalendar/core/locales/es';
import { CapacitacionesService } from '../../services/capacitaciones.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html',
  styleUrls: ['./capacitacion.component.css']
})
export class CapacitacionComponent implements OnInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  calendarOptions: CalendarOptions;
  eventos: any[] = [];
  capacitaciones: any[] = [];
  capacitacionesFiltro: any[] = [];



  constructor(private capacitacionesS: CapacitacionesService, private router: Router) { }

  ngOnInit(): void {
    this.asignarEventos();
    moment.locale('es');
  }

  asignarEventos() {
    this.capacitacionesS.getCapacitaciones().subscribe((resp: any[]) => {
      this.capacitaciones = resp;
      this.capacitaciones.forEach(element => {
        let inicio = new Date(element.acf.fecha_inicio);
        let fin = new Date(element.acf.fecha_fin);
        let fechaInicio = inicio.getFullYear()+'-'+(inicio.getMonth()<10?'0'+(inicio.getMonth()+1):(inicio.getMonth()+1))+'-'+(inicio.getDate()<10?'0'+inicio.getDate():inicio.getDate())+'T'+element.acf.hora_inicio;
        let fechaFin = fin.getFullYear()+'-'+(fin.getMonth()<10?'0'+(fin.getMonth()+1):(fin.getMonth()+1))+'-'+(fin.getDate()<10?'0'+fin.getDate():fin.getDate())+'T'+element.acf.hora_fin;
        // console.log(fechaInicio);
        // console.log(fechaFin);
        this.eventos.push({
          title: element.acf.tipo_de_evento, start: fechaInicio, end: fechaFin,
          extendedProps: {
            id: element.id,
            fecha_Inicio: element.acf.fecha_inicio,
            fecha_FIn: element.acf.fecha_fin
          }
        })
      })
    this.crearCronograma();
    })
  }

  crearCronograma() {
    this.calendarOptions = {
      locale: LocalEs,
      events: this.eventos,
      dateClick: this.reunionesDelDia.bind(this),
      eventClick: this.detalleReunion.bind(this)
    };
  }

  reunionesDelDia(arg){
    console.log(arg);
    this.getReuniones(arg.dateStr)
  }

  changeView(calendar: string){
    this.calendarComponent.getApi().changeView(calendar);
  }

  enviarInterna(capacitacion){
    this.router.navigateByUrl(`/colombia/capacitaciones/${capacitacion.id}`);
    // console.log(capacitacion);
  }

  getReuniones(date: string){
    let fecha = new Date(date);
    console.log(date);
    let fechaSeleccionada = moment(date).format('MM/DD/YYYY');
    // let fechaInicio = ((fecha.getMonth()+1)<10?'0'+(fecha.getMonth()+1):(fecha.getMonth()+1))+'/'+((fecha.getDate()+1)<10?'0'+(fecha.getDate()+1):(fecha.getDate()+1))+'/'+fecha.getFullYear();
    // console.log(fechaInicio);
    console.log(fechaSeleccionada);
    let capacitacion = this.capacitaciones.filter(filtro => {
      if(filtro.acf.fecha_inicio === fechaSeleccionada){
        let fechaCapacitacion = moment(filtro.acf.fecha_inicio+' '+filtro.acf.hora_inicio).format('DD MMMM YYYY hh:mm:ss a');
        filtro.fecha = fechaCapacitacion
        let categorias = [];
        filtro.categorias_capacitaciones.forEach(element => {
          this.capacitacionesS.getCategoriaCapacitacionesId(element).subscribe((resp: any) => {
            categorias.push(resp.name)
            filtro.categorias = categorias;
          })  
        });
        
        return filtro;
      }
    });
    this.capacitacionesFiltro = capacitacion;
    console.log(this.capacitacionesFiltro);
  }

  detalleReunion(arg) {
    let capacitacion = this.capacitaciones.filter(filtro => filtro.id === arg.event._def.extendedProps.id)
    // console.log(capacitacion);
    // console.log(arg.event._def.extendedProps);
  }

}
