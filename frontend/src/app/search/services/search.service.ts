import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  readonly apiUrl = "/api";

  constructor(private http:HttpClient) { }

  getCNPJ(cnpj: string): Observable<any>{
    return this.http.get<any>(this.apiUrl+cnpj);
  }

}
