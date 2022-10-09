import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { map } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';

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
  // apiURLlogin = "https://logongo.herokuapp.com/api/login/"
  apiURLlogin = "http://127.0.0.1:8000/api/login/"
  
  constructor(private http: HttpClient,) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  
  }

  login(email,employee_id, password) {
    return this.http.post<any>(this.apiURLlogin, { email, employee_id, password })
    .pipe(
      map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
    }));
  //       .pipe(map(response => {
  //         // login successful if there's a jwt token in the response
  //         let currentUser: User;
  //         if (response.access) {
  //             // store user details and jwt token in local storage to keep user logged in between page refreshes
  //             currentUser = jwtDecode(response.access)
  //             currentUser.token = response.access
  //             currentUser.refreshToken = response.refresh
  //             localStorage.setItem('currentUser', JSON.stringify(currentUser));
  //             this.currentUserSubject.next(currentUser);
  //         } 
  //         return currentUser;
  //     }),
  // )
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

  refreshToken() {
    console.log('this.currentUserValue.refreshToken')
    console.log(this.currentUserValue.refreshToken)
    const refreshToken = this.currentUserValue.refreshToken
    return this.http.post<any>("https://logongo.herokuapp.com/api/token/refresh/", { 'refresh': refreshToken })
        .pipe(
            map(response => {
                // login successful if there's a jwt token in the response
                console.log('refresh')
                console.log(response)
                let currentUser: User;
                if (response.access) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    currentUser = jwtDecode(response.access)
                    currentUser.token = response.access
                    currentUser.refreshToken = response.refresh
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    console.log(currentUser)
                    this.currentUserSubject.next(currentUser);
                } 
                return currentUser;
            }),
        )
        // .subscribe( data => console.log('data'), error => console.warn(error))
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}

}
