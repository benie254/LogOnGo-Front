import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:8000';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUser(): Observable<any> {
    return this.http.get(API_URL + 'profile_details', { responseType: 'text' });
  }
  getAdmin(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
