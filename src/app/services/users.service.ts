import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/users/';
  }

  // hacemos destructuring de user porque no queremos ni el id ni el repite password, del objeto que recibo //
  // solo queremos el username, email y el password del objeto que recibimos
  register(pForm: { username: string, email: string, password: string; }): Promise<any> {
    // cabeceras - headers //
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpClient.post<any>(this.baseUrl + 'register', pForm, httpOptions).toPromise();
  }
}
