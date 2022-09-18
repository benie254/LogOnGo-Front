import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { map } from 'rxjs/operators';

const AUTH_API = 'http://127.0.0.1:8000';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  
  constructor(private http: HttpClient,) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  
  }

  login(email,employee_id, password) {
    return this.http.post<any>("https://logongo.herokuapp.com/api/login/", { email, employee_id, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
}

  // login(username: string, password: string): Observable<any> {
  //   return this.http.post(AUTH_API + 'login/', {
  //     username,
  //     password
  //   }, httpOptions);
  // }
  register(username: string, email: string, first_name: string, last_name: string, petrol_station: string, password: string): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/register/', {
      username,
      email,
      first_name,
      last_name,
      petrol_station,
      password,
    });
  }

}
