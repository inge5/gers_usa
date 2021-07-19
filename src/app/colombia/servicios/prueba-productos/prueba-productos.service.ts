import { Injectable } from '@angular/core';
import api from "@woocommerce/woocommerce-rest-api";
@Injectable({
  providedIn: 'root'
})
export class PruebaProductosService {

  url = 'https://pruebasneuro.co/N-1003backWordpress';

  // api: any;
  por_page: number;
  categoria: any[] = [];
  // pages: number;

  constructor() {
    // this.axios = require('axios').default;
    // this.axios.defaults.baseURL = 'https://pruebasneuro.co/N-1062/api/';
    // this.axios.defaults.withCredentials = true;
    this.setPorPagina();
  }

  setPorPagina(cantidad: number = 20){
    this.por_page = cantidad;
    // console.log(this.por_page);
  }

  getCategoriesWP(){
    let WooCommerce = new api({
      url: `${this.url}`,
      consumerKey: 'ck_235432cde60974e317bfc4a90c958d258699e923',
      consumerSecret: 'cs_0ce13e2e0258658a91c83022ff35b029df5bf22f',
      wpAPI: true,
      version: 'wc/v3',
      queryStringAuth: true
    });
    return WooCommerce.get(`products/categories`);
  }

  setCategoria(categoria: any[]){
    this.categoria = categoria;
  }

  getCategoria(){
    return this.categoria;
  }

  getListarProductosWP(){
    let WooCommerce = new api({
      url: `${this.url}`,
      consumerKey: 'ck_235432cde60974e317bfc4a90c958d258699e923',
      consumerSecret: 'cs_0ce13e2e0258658a91c83022ff35b029df5bf22f',
      wpAPI: true,
      version: 'wc/v3',
      queryStringAuth: true
    });
    return WooCommerce.get(`products?per_page=${this.por_page}`);
  }

  getlistarProductoUnicoWP(id: number){
    // this.api = require("@woocommerce/woocommerce-rest-api").default;
    let WooCommerce = new api({
      url: `${this.url}`,
      consumerKey: 'ck_235432cde60974e317bfc4a90c958d258699e923',
      consumerSecret: 'cs_0ce13e2e0258658a91c83022ff35b029df5bf22f',
      wpAPI: true,
      version: 'wc/v3',
      queryStringAuth: true
    });
    return WooCommerce.get(`products/${id}`);
  }

  // getListarProductos() {

  //   return new Promise(resolve => {
  //     this.httpC.get('https://pruebasneuro.co/N-1062/api/api/producto/listado-productos' ).subscribe(data => {
  //       resolve(data);
  //     }, error => {
  //       console.log(error);
  //     });
  //   });
  // }

  // getPaginationCities(url: string){
  //   return new Promise(resolve => {
  //     this.httpC.get(url).subscribe(data => {
  //       resolve(data);
  //     }, error => {
  //       console.log(error);
  //     });
  //   });

  // }

  // postListarProductos(data: any) {

  //   return new Promise((resolve, reject) => {
  //     this.axios.get('/sanctum/csrf-cookie').then(() => {
  //       this.axios.post('https://pruebasneuro.co/N-1062/api/api/producto/listar-producto-filtros', data).then(response => {
  //         resolve(response.data);
  //       }).catch(error => reject(error));
  //     }).catch(error => reject(error));
  //   });
  // }


  // enviarCorreos(data: any) {

  //   return new Promise((resolve, reject) => {
  //     // this.axios.get('/sanctum/csrf-cookie').then(() => {
  //       this.axios.post('https://pruebasneuro.co/N-1062/api/api/producto/enviar-correo-cotizacion', data)
  //       .then(response => resolve(response))
  //       .catch(error => reject(error));
  //     // }).catch(error => reject(error));
  //   });
  // }

  // getlistarProductoUnico(id: number) {
  //   return new Promise(resolve => {
  //     this.httpC.get('https://pruebasneuro.co/N-1062/api/api/producto/listar-unico-producto' + '/' + id).subscribe(data => {
  //       resolve(data);
  //     }, error => {
  //       console.log(error);
  //     });
  //   });

  // }

}
