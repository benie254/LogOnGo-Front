import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:8000';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login/', {
      username,
      password
    }, httpOptions);
  }
  register(username: string, email: string, first_name: string, last_name: string, petrol_station: string, password: string): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/register', {
      username,
      email,
      first_name,
      last_name,
      petrol_station,
      password,
    });
  }

}
