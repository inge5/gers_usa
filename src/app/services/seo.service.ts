import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private titulo: Title) { }

  cambiarTitulo(titulo: string){
    this.titulo.setTitle(titulo)
  }
}
