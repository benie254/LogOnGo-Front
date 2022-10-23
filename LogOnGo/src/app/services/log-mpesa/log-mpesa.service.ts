import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { Log } from 'src/app/classes/log/log';

// const apiURL = 'https://logongo.herokuapp.com/api/';
const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class LogMpesaService {
  apiAllMpesaLogs = apiURL + 'all-mpesa-logs/';
  apiTodayMpesaLogs = apiURL + 'mpesa-logs-today/';
  apiUserMpesaLogs = apiURL + 'user-mpesa-logs/';
  apiMpesaLogDetails = apiURL + 'mpesa-log-details/';

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

  getAllMpesaLogs(): Observable<any>{
    return this.http.get<any>(this.apiAllMpesaLogs);
  }
  getUserMpesaLogs(id: any): Observable<LogMpesa>{
    return this.http.get<LogMpesa>(this.apiUserMpesaLogs + id);
  }
  getTodayMpesaLogs(id: number): Observable<LogMpesa>{
    return this.http.get<LogMpesa>(this.apiTodayMpesaLogs + id);
  }
  getMpesaLogDetails(id: number): Observable<LogMpesa>{
    return this.http.get<LogMpesa>(this.apiMpesaLogDetails + id)
  }

  addMpesaLog(mpesa_info: LogMpesa) {
    return this.http.post(this.apiAllMpesaLogs, mpesa_info);
  }

  updateMpesaDetails(id,data): Observable<LogMpesa>{
    return this.http.put<LogMpesa>(this.apiMpesaLogDetails + id, data).pipe(
      catchError(this.handleError)
    );
  }
}
