import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VacantesUsaService {

  public url: string;

  constructor(private _http:HttpClient, private _router:Router) {
    this.url = environment.urlUsa;
   }

   getVacancies(): Observable<any>{
    return this._http.get(`${this.url}/vacancies`);
   }
   getCategoriasVacantes(): Observable<any>{
    return this._http.get(`${this.url}/categoria_vacancies`);
  }
   getVacancy(slug: string): Observable<any>{
    return this._http.get(`${this.url}/vacancies/?slug=${slug}/`, {
    }).pipe(
        map(res => res),
        catchError(err =>{
          switch(err.status){
            case 404:
              this._router.navigate(['/404']);
              break;
          }
          return throwError('Error en el servicio');
        })
    );
  }
}
