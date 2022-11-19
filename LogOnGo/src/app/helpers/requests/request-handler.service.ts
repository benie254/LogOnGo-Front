import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthHandlerService } from 'src/app/modules/auth/services/requests/auth-handler.service';
import { MessageService } from 'src/app/modules/errors/services/message/message.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequestHandlerService {
  error = '';

  

  private handleError(error: HttpErrorResponse) {
    
    this.authHandler.authErrors(error);
    setTimeout(() => {
      this.messageS.clear();
    }, 20000)



    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
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
    }  else if (error.status === 401){
      if (error.error.detail){
        Notiflix.Report.warning(
          error.statusText,
          error.error.detail,
          'Okay',
        ) 
      } else {
        Notiflix.Report.warning(
          error.statusText,
          'Seems you are not logged in, or your session expired. Please login to continue',
          'Okay',
        )
      }
    } else if (error.status === 403){
      Notiflix.Report.warning(
        error.statusText,
        'Sorry, you do not have permission to view or modify the requested resource',
        'Okay',
      )
    } else if (error.status === 404){
      Notiflix.Report.warning(
        error.statusText,
        'Seems you are not logged in, or your session expired. Please login to continue',
        'Okay',
      )
    }  else if (error.status === 408 || 504){
      Notiflix.Report.warning(
        error.statusText,
        "Don't worry, we will reload this page to resend your request",
        'Okay',
      )
      // location.reload();
    } else if (error.status === 500 || 501 || 503){
      Notiflix.Report.warning(
        error.statusText,
        'Sorry, we ran into a problem while processing your request. Please try again',
        'Okay',
      )
    } else {
      
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      Notiflix.Report.failure(
        error.statusText,
        'Sorry, we ran into a problem while processing your request. Please try again',
        'Okay',
      )
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  constructor(
    private http:HttpClient,
    private messageS:MessageService,
    private authHandler:AuthHandlerService,
  ) { }

  handleGET<T>(apiURL: string, options?): Observable<any>{
    return this.http.get<T>(apiURL, options).pipe(
      retry(3), // retry a failed request up to 3 times
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
}
