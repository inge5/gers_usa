import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariableGlobalService {

  private data = new BehaviorSubject(null);
  private cate = new BehaviorSubject(null);
  private busca = new BehaviorSubject(null);
  currentCategory = this.cate.asObservable();
  currentMessage = this.data.asObservable();
  currentBusca = this.busca.asObservable();
  //data: any;

  changeMessage() {

    this.consultarDatosLocales();
  }

  constructor() {
    this.consultarDatosLocales();
  }

  setCategoria(categoria){
    this.cate.next(categoria);
    // console.log(this.cate);
  }

  setBuscador(busqueda: string){
    this.busca.next(busqueda);
  }

  consultarDatosLocales() {
    this.data.next(JSON.parse(localStorage.getItem('carrito'))) ;
    // console.log(this.data);
  }

}
