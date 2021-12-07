import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagesUsaService {
  public url: string;

  constructor(private _http: HttpClient) { 
    this.url = environment.urlUsa;
  }

  getCorporateThinking(): Observable<any>{
    return this._http.get(`${this.url}/pages/117/`);
  }

  getContact(): Observable<any>{
    return this._http.get(`${this.url}/pages/203`);
  }

  getProyects(): Observable<any>{
    return this._http.get(`${this.url}/pages/349`);
  }
  getDataProtectionPolicy(): Observable<any>{
    return this._http.get(`${this.url}/pages/409`);
  }

  /**** Representaciones USA ****/
  getNeplanUsa(): Observable<any>{
    return this._http.get(`${this.url}/representaciones/208`)
  }

  /**** Servicios USA ****/
  getPowerSystemStudies(): Observable<any>{
    return this._http.get(`${this.url}/servicios/209`);
  }

  getSmartGridsUsa(): Observable<any>{
    return this._http.get(`${this.url}/servicios/221`);
  }

  getProtectionAndControl(): Observable<any>{
    return this._http.get(`${this.url}/servicios/232`);
  }

  getFieldServices(): Observable<any>{
    return this._http.get(`${this.url}/servicios/245`);
  }

  /*** Proyectos USA***/
  getProyectsUsa(): Observable<any>{
    return this._http.get(`${this.url}/proyectos_usa?per_page=40`);
  }

  
}
