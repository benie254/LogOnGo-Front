import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { Log } from 'src/app/classes/log/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  apiURLtodayLogs = 'https://logongo.herokuapp.com/api/logs-today/'
  apiURLallLogs = 'https://logongo.herokuapp.com/api/all-logs/'
  apiURLpetrolLogDetails = 'https://logongo.herokuapp.com/api/log-details/1'
  apiURLpetrolLogsYesterday = 'https://logongo.herokuapp.com/api/logs-today/'
  apiURLpetrolLogs = 'https://logongo.herokuapp.com/api/fuel-logs-today/'
  apiURLpetrolLogs2 = 'https://logongo.herokuapp.com/api/fuel-logs-ii-today/1'
  apiURLpetrolLogs3 = 'https://logongo.herokuapp.com/api/fuel-logs-iii-today/1'
  apiURLpetrolLogs4 = 'https://logongo.herokuapp.com/api/fuel-logs-iv-today/1'
  apiURLmpesaLogs = 'https://logongo.herokuapp.com/api/mpesa-logs-today/'

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

  getAllLogs(): Observable<Log>{
    return this.http.get<Log>(this.apiURLallLogs);
  }
  getPetrolLogs(id:any): Observable<Log>{
    return this.http.get<Log>(this.apiURLpetrolLogs + id);
  }
  getPetrolLogs2(): Observable<Log>{
    return this.http.get<Log>(this.apiURLpetrolLogs2);
  }
  getPetrolLogs3(): Observable<Log>{
    return this.http.get<Log>(this.apiURLpetrolLogs3);
  }
  getPetrolLogs4(): Observable<Log>{
    return this.http.get<Log>(this.apiURLpetrolLogs4);
  }
  getMpesaLogs(): Observable<LogMpesa>{
    return this.http.get<LogMpesa>(this.apiURLmpesaLogs);
  }
  getPetrolLogDetails(id: number): Observable<Log>{
    return this.http.get<Log>(this.apiURLpetrolLogDetails + id);
  }
  getYesterdayLogs(): Observable<Log>{
    return this.http.get<Log>(this.apiURLpetrolLogsYesterday);
  }

  addLog(log_info: any) {
    return this.http.post(this.apiURLtodayLogs, log_info);
  }

  updateLogInfo(log_info:Log): Observable<Log>{
    return this.http.put<Log>(this.apiURLtodayLogs, log_info).pipe(
      catchError(this.handleError)
    );
  }
}
