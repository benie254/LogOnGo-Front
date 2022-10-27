import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CreditCard } from 'src/app/classes/card/credit-card'; 
import { Log } from 'src/app/classes/log/log';

// const apiURL = 'https://logongo.herokuapp.com/api/';
const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiAllCreditCardLogs = apiURL + 'all-credit-card-logs/';
  apiTodayCreditCardLogs = apiURL + 'credit-card-logs-today/';
  apiUserCreditCardLogs = apiURL + 'user-credit-card-logs/';
  apiCreditCardLogDetails = apiURL + 'credit-card-log-details/';
  apiDelCard = apiURL + 'delete-credit-card/request/';

  constructor(private http:HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getAllCreditCardLogs(): Observable<CreditCard>{
    return this.http.get<CreditCard>(this.apiAllCreditCardLogs);
  }
  getUserCreditCardLogs(id: any): Observable<CreditCard>{
    return this.http.get<CreditCard>(this.apiUserCreditCardLogs + id);
  }
  getTodayCreditCardLogs(id: number): Observable<CreditCard>{
    return this.http.get<CreditCard>(this.apiTodayCreditCardLogs + id)
  }
  getCreditCardLogDetails(id: number): Observable<CreditCard>{
    return this.http.get<CreditCard>(this.apiCreditCardLogDetails + id)
  }

  addCreditCardLog(creditCardInfo: CreditCard) {
    return this.http.post(this.apiAllCreditCardLogs, creditCardInfo);
  }

  updateCreditCardDetails(id,data): Observable<CreditCard>{
    return this.http.put<CreditCard>(this.apiCreditCardLogDetails + id, data)
  }
  deleteCard(logData): Observable<any>{
    return this.http.post<any>(this.apiDelCard, logData)
  }
}
