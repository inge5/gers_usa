import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenusUsaService {
  public menu: string;

  constructor(public _http: HttpClient) { 
    this.menu = GLOBAL.menuUsa;
  }

  getMenuPrincipal(): Observable<any>{
    return this._http.get(`${this.menu}/menus/menu-principal`);
  }
}

