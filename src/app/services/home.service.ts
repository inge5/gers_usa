import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
  public base: string;
  public url: string;
  constructor(public _http: HttpClient){
      this.base = GLOBAL.base;
      this.url = GLOBAL.url;
  }

  getHome(): Observable<any>{
    return this._http.get(`${this.base}/pages/2/`);
  }

  getProyects(): Observable<any>{
    return this._http.get(`${this.url}/proyectos?per_page=40`);
  }
}