import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

const apiURL = 'http://127.0.0.1:8000/api/';
// const apiURL = 'https://logongo.herokuapp.com/api/';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser = this.authService.currentUserValue;
  
  
  constructor(
    private http: HttpClient,
    private authService:AuthService,
    ) { }

  
    // private handleError(error: HttpErrorResponse) {
    //   if (error.status === 0) {
    //     // A client-side or network error occurred. Handle it accordingly.
    //     console.error('An error occurred:', error.error);
    //   } else {
    //     // The backend returned an unsuccessful response code.
    //     // The response body may contain clues as to what went wrong.
    //     console.error(
    //       `Backend returned code ${error.status}, body was: `, error.error);
    //   }
    //   // Return an observable with a user-facing error message.
    //   return throwError(() => new Error('Something bad happened; please try again later.'));
    // }

  getPublicContent(): Observable<any> {
    return this.http.get(apiURL + 'all', { responseType: 'text' });
  }
  getUser(): Observable<any> {
    return this.http.get(apiURL + 'profile_details', { responseType: 'text' });
  }
  getAdmin(): Observable<any> {
    return this.http.get(apiURL + 'admin', { responseType: 'text' });
  }
  changePassword(passData, id:number): Observable<any>{
    return this.http.put(apiURL + 'change-password/' + id, passData)
  }
  requestResetPassword(userData, id:number): Observable<any>{
    return this.http.post(apiURL + 'reset-password/request/' + id, userData)
  }
  resetPassword(passData, id:number): Observable<any>{
    return this.http.put(apiURL + 'reset-password/confirmed/' + id, passData)
  }
}
