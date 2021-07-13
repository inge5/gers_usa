import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class PagesMxService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.urlMexico;
  }
  getContactenos(): Observable<any>{
    return this._http.get(`${this.url}/pages/26/`);
  }
  getPensamientoCorporativo(): Observable<any>{
    return this._http.get(`${this.url}/pages/55/`);
  }
  getPoliticaGestionIntegral(): Observable<any>{
    return this._http.get(`${this.url}/pages/102/`)
  }
  getPruebasAutomatizacionControl(): Observable<any>{
    return this._http.get(`${this.url}/pages/115/`)
  }
  getSmartGrids(): Observable<any>{
    return this._http.get(`${this.url}/pages/134/`)
  }
  getServiciosEnergeticos(): Observable<any>{
    return this._http.get(`${this.url}/pages/156/`)
  }
  getPlaneacionProyectos(): Observable<any>{
    return this._http.get(`${this.url}/pages/175/`)
  }
  getEstudioSistemasElectricos(): Observable<any>{
    return this._http.get(`${this.url}/pages/193/`)
  }
  getDisenoIngenieria(): Observable<any>{
    return this._http.get(`${this.url}/pages/220/`)
  }
  getInterventoriaAsesoria(): Observable<any>{
    return this._http.get(`${this.url}/pages/246/`)
  }
  /**** Representaciones ****/ 
  getNeplan(): Observable<any>{
    return this._http.get(`${this.url}/representaciones/266`)
  }
  getBeckwithElectronic(): Observable<any>{
    return this._http.get(`${this.url}/representaciones/296`)
  }
  getXGSLab(): Observable<any>{
    return this._http.get(`${this.url}/representaciones/307`)
  }
  /***************************/
  getProyectos(): Observable<any>{
    return this._http.get(`${this.url}/proyectos/`);
  }

  /**** Página Proyectos *****/
  getProyectosPagina(): Observable<any>{
    return this._http.get(`${this.url}/pages/334W`)
  }
  /*************************/
  getAcuerdosInternacionales(): Observable<any>{
    return this._http.get(`${this.url}/pages/619`)
  }
}

