import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {

  url_usa: string = "https://gers.com.co/backend/usa/wp-json/wp/v2";

  constructor(private http: HttpClient) {
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
