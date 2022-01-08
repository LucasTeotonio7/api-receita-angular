import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from'@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  readonly apiUrl = "https://publica.cnpj.ws/cnpj/";

  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }

  getCNPJ(cnpj: string): Observable<any>{
    return this.http.get<any>(this.apiUrl+cnpj);
  }

  errorMessage(msg: string):void{
    this.snackBar.open(msg,'X',{
      duration: Infinity,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'msg-error',
    })
  }

}
