import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
declare const require: any;
@Injectable({
  providedIn: 'root'
})
export class PruebaProductosService {

  private axios;
  private baseURL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpC: HttpClient) {
    this.axios = require('axios').default;

    this.axios.defaults.baseURL = 'http://localhost:8000/';
    this.axios.defaults.withCredentials = true;
  }

  getListarProductos() {

    return new Promise(resolve => {
      this.httpC.get('http://localhost:8000/api/producto/listado-productos' ).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });

  }

  getPaginationCities(url: string){
    return new Promise(resolve => {
      this.httpC.get(url).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });

  }

  postListarProductos(data: any) {

    return new Promise((resolve, reject) => {
      this.axios.get('/sanctum/csrf-cookie').then(() => {
        this.axios.post('http://localhost:8000/api/producto/listar-producto-filtros', data).then(response => {
          resolve(response.data);
        }).catch(error => reject(error));
      }).catch(error => reject(error));
    });
  }


  enviarCorreos(data: any) {

    return new Promise((resolve, reject) => {
      this.axios.get('/sanctum/csrf-cookie').then(() => {
        this.axios.post('http://localhost:8000/api/producto/enviar-correo-cotizacion', data).then(response => {
          resolve(response.data);
        }).catch(error => reject(error));
      }).catch(error => reject(error));
    });
  }


  getlistarProductoUnico(id: number) {
    return new Promise(resolve => {
      this.httpC.get('http://localhost:8000/api/producto/listar-unico-producto' + '/' + id).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });

  }

}
