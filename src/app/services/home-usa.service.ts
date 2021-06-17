import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeUsaService {
  public baseUsa: string;
  public urlUsa: string;

  constructor(public _http: HttpClient) { 
    this.baseUsa = GLOBAL.baseUsa;
    this.urlUsa = GLOBAL.urlUsa;
  }

  getHomeUsa(): Observable<any>{
    return this._http.get(`${this.baseUsa}/pages/70/`);
  }

  /*
  getProyects(): Observable<any>{
    return this._http.get(`${this.urlUsa}/proyectos/`);
  }
  */
}
