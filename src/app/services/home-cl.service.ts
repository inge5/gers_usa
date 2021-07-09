import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeClService {
  public base: string;
  public url: string;

  constructor(public _http: HttpClient) { 
    this.base = GLOBAL.baseChile;
    this.url = GLOBAL.urlChile;
  }

  getHome(): Observable<any>{
    return this._http.get(`${this.base}/pages/8/`);
  }
}
