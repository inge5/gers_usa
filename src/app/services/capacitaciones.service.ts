import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {

  url: string = "https://pruebasneuro.co/N-1003backWordpress/wp-json/wp/v2"

  constructor(private http: HttpClient) {
   }

   getCapacitaciones(){
     return this.http.get(`${this.url}/capacitaciones`);
   }
   getCategoriaCapacitaciones(){
     return this.http.get(`${this.url}/categorias_capacitaciones`)
   }
   getCategoriaCapacitacionesId(id: number){
     return this.http.get(`${this.url}/categorias_capacitaciones/${id}`);
   }
   getCapacitacionesId(id: number){
    return this.http.get(`${this.url}/capacitaciones/${id}`);
  }
}
