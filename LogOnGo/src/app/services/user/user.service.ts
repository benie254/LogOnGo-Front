import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // http options--for api calls
  private httpOptions: any; 

  // JWT 
  public token: string; 

  // token expiry 
  public token_expires: Date; 

  // user 
  public username: string;

  // login error msg 
  public errors: any = [];

  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  public login(user){
    this.http.post('/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        this.updateData(
          data['token']
        );
      },
      err => {
        this.errors = err['error']
      }
    )
  }

  public refreshToken(){
    this.http.post('/api-token-refresh/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
      data => {
        this.updateData(
          data['token']
        );
      },
      err => {
        this.errors = err['error'];
      }
    )
  }

  public logout(){
    this.token = null; 
    this.token_expires = null; 
    this.username = null;
  }

  private updateData(token){
    this.token = token; 
    this.errors = [];

    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.username; 
  }
}
