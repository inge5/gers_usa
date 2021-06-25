import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
// import api from "@woocommerce/woocommerce-rest-api";
declare const require: any;
@Injectable({
  providedIn: 'root'
})
export class PruebaProductosService {

  private axios;
  private baseURL;
  url = 'https://pruebasneuro.co/N-1003backWordpress';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  api: any;
  por_page: number;
  categoria: number;
  // pages: number;

  constructor(private httpC: HttpClient) {
    this.axios = require('axios').default;
    this.api = require("@woocommerce/woocommerce-rest-api").default;
    this.axios.defaults.baseURL = 'https://pruebasneuro.co/N-1062/api/';
    this.axios.defaults.withCredentials = true;
    this.setPorPagina();
  }

  setPorPagina(cantidad: number = 5){
    this.por_page = cantidad;
    console.log(this.por_page);
  }

  getCategoriesWP(){
    let WooCommerce = new this.api({
      url: `${this.url}`,
      consumerKey: 'ck_235432cde60974e317bfc4a90c958d258699e923',
      consumerSecret: 'cs_0ce13e2e0258658a91c83022ff35b029df5bf22f',
      wpAPI: true,
      version: 'wc/v3'
    });
    return WooCommerce.get(`products/categories`);
  }

  setCategoria(categoria: number){
    this.categoria = categoria;
  }

  getCategoria(){
    return this.categoria;
  }

  getListarProductosWP(){
    let WooCommerce = new this.api({
      url: `${this.url}`,
      consumerKey: 'ck_235432cde60974e317bfc4a90c958d258699e923',
      consumerSecret: 'cs_0ce13e2e0258658a91c83022ff35b029df5bf22f',
      wpAPI: true,
      version: 'wc/v3'
    });
    return WooCommerce.get(`products?per_page=${this.por_page}`);
  }

  getlistarProductoUnicoWP(id: number){
    this.api = require("@woocommerce/woocommerce-rest-api").default;
    let WooCommerce = new this.api({
      url: `${this.url}`,
      consumerKey: 'ck_235432cde60974e317bfc4a90c958d258699e923',
      consumerSecret: 'cs_0ce13e2e0258658a91c83022ff35b029df5bf22f',
      wpAPI: true,
      version: 'wc/v3'
    });
    return WooCommerce.get(`products/${id}`);
  }

  getListarProductos() {

    return new Promise(resolve => {
      this.httpC.get('https://pruebasneuro.co/N-1062/api/api/producto/listado-productos' ).subscribe(data => {
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
        this.axios.post('https://pruebasneuro.co/N-1062/api/api/producto/listar-producto-filtros', data).then(response => {
          resolve(response.data);
        }).catch(error => reject(error));
      }).catch(error => reject(error));
    });
  }


  enviarCorreos(data: any) {

    return new Promise((resolve, reject) => {
      // this.axios.get('/sanctum/csrf-cookie').then(() => {
        this.axios.post('https://pruebasneuro.co/N-1062/api/api/producto/enviar-correo-cotizacion', data)
        .then(response => resolve(response))
        .catch(error => reject(error));
      // }).catch(error => reject(error));
    });
  }

  getlistarProductoUnico(id: number) {
    return new Promise(resolve => {
      this.httpC.get('https://pruebasneuro.co/N-1062/api/api/producto/listar-unico-producto' + '/' + id).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });

  }

}
