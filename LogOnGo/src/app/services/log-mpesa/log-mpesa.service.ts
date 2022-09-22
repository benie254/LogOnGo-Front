import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';

@Injectable({
  providedIn: 'root'
})
export class LogMpesaService {
   // apiURLallMpesaLogs = 'https://logongo.herokuapp.com/api/all-mpesa-logs/'
  apiURLallMpesaLogs = 'http://127.0.0.1:8000/api/all-mpesa-logs/';
  // apiURLtodayMpesaLogs = 'https://logongo.herokuapp.com/api/mpesa-logs-today/'
  apiURLtodayMpesaLogs = 'http://127.0.0.1:8000/api/mpesa-logs-today/';
  // apiURLuserMpesaLogs = 'https://logongo.herokuapp.com/api/user-mpesa-logs/'
  apiURLuserMpesaLogs = 'http://127.0.0.1:8000/api/user-mpesa-logs/';
  apiMpesaLogDetails = 'http://127.0.0.1:8000/api/mpesa-log-details/'

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

  getAllMpesaLogs(): Observable<LogMpesa>{
    return this.http.get<LogMpesa>(this.apiURLallMpesaLogs);
  }
  getUserMpesaLogs(id: any): Observable<LogMpesa>{
    return this.http.get<LogMpesa>(this.apiURLuserMpesaLogs + id);
  }
  getMpesaLogDetails(id: number): Observable<LogMpesa>{
    return this.http.get<LogMpesa>(this.apiMpesaLogDetails + id)
  }

  addMpesaLog(mpesa_info: LogMpesa) {
    return this.http.post(this.apiURLtodayMpesaLogs, mpesa_info);
  }

  updateMpesaDetails(id,data): Observable<LogMpesa>{
    return this.http.put<LogMpesa>(this.apiMpesaLogDetails + id, data).pipe(
      catchError(this.handleError)
    );
  }
}
