import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { map } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';
import { MessageService } from 'src/app/modules/errors/services/message/message.service';

const authAPI = 'http://127.0.0.1:8000/api/auth/';
// const authAPI = 'https://logongo.herokuapp.com/api/auth';
const apiURL = 'http://127.0.0.1:8000/api/';
// const apiURL = 'https://logongo.herokuapp.com/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  apiLogin = authAPI + "login"
  apiReg = authAPI + "register"

  public handleErrors(error: HttpErrorResponse){
    if(error.error.detail || error.error.email || error.error.username || error.error.password || error.error.first_name || error.error.last_name || error.error.petrol_station || error.error.employee_id){
      this.messageS.add(error.error.detail);
      this.messageS.add(error.error.email);
      this.messageS.add(error.error.username);
      this.messageS.add(error.error.password);
      this.messageS.add(error.error.first_name);
      this.messageS.add(error.error.last_name);
      this.messageS.add(error.error.petrol_station);
      this.messageS.add(error.error.employee_id);
      setTimeout(() => {
        this.messageS.clear();
      }, 5000)
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
  constructor(
    private http: HttpClient,
    private handler: RequestHandlerService,
    private messageS:MessageService,
    ) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  
  }

  login(userData) {
    return this.handler.handlePOST(this.apiLogin, userData)
    .pipe(
      map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
    }));
  }

  register(userData) {
    return this.handler.handlePOST(this.apiReg, userData);
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
