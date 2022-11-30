import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from 'src/app/classes/user/user';
import { MessageService } from 'src/app/modules/errors/services/message/message.service';
import { ErrorsService } from '../errors/errors.service';

@Injectable({
  providedIn: 'root'
})
export class RequestHandlerService {
  error = '';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private handleError(error: HttpErrorResponse) {
    Notiflix.Loading.remove();
    this.errorHandler.allErrors(error);
    setTimeout(() => {
      this.messages.clear();
    }, 10000)

    if (error.status === 0) {
      console.error('An error occurred:', error.error);
      Notiflix.Report.failure(
        'Sorry!',
        'An error occured',
        'Okay',
      )
    } else if (error.status === 400){
      Notiflix.Report.failure(
        error.statusText,
        'Please fix the highlighted errors and try again',
        'Okay',
      )
      console.warn(error)
    }  else if (error.status === 401){
      if (error.error.detail){
        this.logout();
      } else {
        this.logout();
      }
    } else if (error.status === 403){
      Notiflix.Report.warning(
        error.statusText,
        'Sorry, you do not have permission to view or modify the requested resource',
        'Okay',
      )
    } else if (error.status === 404){
     
    }  else if (error.status === 408 || 504){
      Notiflix.Report.warning(
        error.statusText,
        "Don't worry, this has nothing to do with you. Please give it another try.",
        'Okay',
      )
    } else if (error.status === 500 || 501 || 503){
      Notiflix.Report.warning(
        error.statusText,
        'Sorry, we ran into a problem while processing your request. Please try again',
        'Okay',
      )
    } else {
      Notiflix.Report.failure(
        error.statusText,
        'Sorry, we ran into a problem while processing your request. Please try again',
        'Okay',
      )
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        console.warn(error)
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  constructor(
    private http:HttpClient,
    private messages:MessageService,
    private errorHandler:ErrorsService,
    private router:Router,
  ) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }

  handleGET<T>(apiURL: string, options?): Observable<any>{
    return this.http.get<T>(apiURL, options).pipe(
      retry(3), 
      catchError(
      (err) => this.handleError(err)
      ) 
    )
  }
  handlePOST<T>(apiURL: string, payload?, options?): Observable<any>{
    return this.http.post<T>(apiURL, payload, options).pipe(
      retry(3),
      catchError(
        (err) => this.handleError(err)
      )
    )
  }
  handlePUT<T>(apiURL: string, payload?, options?): Observable<any>{
    return this.http.put<T>(apiURL, payload, options).pipe(
      retry(3),
      catchError(
        (err) => this.handleError(err)
      )
    )
  }
  handleDEL<T>(apiURL: string, options?): Observable<any>{
    return this.http.delete<T>(apiURL, options).pipe(
      retry(3), 
      catchError(
      (err) => this.handleError(err)
      ) 
    )
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate[('/auth')];
  }
}
