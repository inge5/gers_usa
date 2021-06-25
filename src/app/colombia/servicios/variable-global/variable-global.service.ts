import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariableGlobalService {

  private data = new BehaviorSubject(null);
  private cate = new BehaviorSubject(null);
  currentCategory = this.cate.asObservable();
  currentMessage = this.data.asObservable();
  //data: any;

  changeMessage() {

    this.consultarDatosLocales();
  }

  constructor() {
    this.consultarDatosLocales();
  }

  setCategoria(categoria){
    this.cate.next(categoria);
  }

  consultarDatosLocales() {
    this.data.next(JSON.parse(localStorage.getItem('carrito'))) ;
    console.log(this.data);


  }

}
