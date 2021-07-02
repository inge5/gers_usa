import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {

  url: string = "https://pruebasneuro.co/N-1003backWordpress/wp-json/wp/v2"
  url_usa: string = "https://pruebasneuro.co/N-1003backWordpress/usa/wp-json/wp/v2"

  constructor(private http: HttpClient) {
   }

   //Colombia

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

  //Usa

  getCapacitacionesUsa(){
    return this.http.get(`${this.url_usa}/capacitaciones`);
  }
  getCategoriaCapacitacionesUsa(){
    return this.http.get(`${this.url_usa}/categorias_capacitaciones`)
  }
  getCategoriaCapacitacionesIdUsa(id: number){
    return this.http.get(`${this.url_usa}/categorias_capacitaciones/${id}`);
  }
  getCapacitacionesIdUsa(id: number){
   return this.http.get(`${this.url_usa}/capacitaciones/${id}`);
 }
}
