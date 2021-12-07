import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';;
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeUsaService {
  public baseUsa: string;
  public urlUsa: string;

  constructor(public _http: HttpClient) { 
    this.baseUsa = environment.baseUsa;
    this.urlUsa = environment.urlUsa;
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
