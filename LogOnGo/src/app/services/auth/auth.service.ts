import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { map } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';

const authAPI = 'http://127.0.0.1:8000/api/';
// const authAPI = 'https://logongo.herokuapp.com/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  apiLogin = authAPI + "login/"
  apiReg = authAPI + "register/"
  
  constructor(private http: HttpClient,) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  
  }

  login(userData) {
    return this.http.post<any>(this.apiLogin, userData)
    .pipe(
      map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
    }));
  }

  register(userData) {
    return this.http.post<any>(this.apiReg, userData);
  }

  refreshToken() {
    console.log('this.currentUserValue.refreshToken')
    console.log(this.currentUserValue.refreshToken)
    const refreshToken = this.currentUserValue.refreshToken
    return this.http.post<any>(authAPI + "token/refresh/", { 'refresh': refreshToken })
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
