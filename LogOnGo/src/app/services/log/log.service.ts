import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { Log } from 'src/app/classes/log/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  // apiURLtodayLogs = 'https://logongo.herokuapp.com/api/logs-today/'
  apiURLtodayLogs = 'http://127.0.0.1:8000/api/logs-today/';
  apiURLuserLogs = 'http://127.0.0.1:8000/api/user-logs/';
  // apiURLuserLogs = 'https://logongo.herokuapp.com/api/user-logs/';
  // apiURLallLogs = 'https://logongo.herokuapp.com/api/all-logs/';
  apiURLallLogs = 'http://127.0.0.1:8000/api/all-logs/';
  // apiURLpetrolLogDetails = 'https://logongo.herokuapp.com/api/log-details/';
  apiURLpetrolLogDetails = 'http://127.0.0.1:8000/api/petrol-log-details/';
  apiURLlogDetails = 'http://127.0.0.1:8000/api/log-details/';
  // apiURLlogDetails = 'https://logongo.herokuapp.com/api/log-details/';
  // apiURLpetrolLogsYesterday = 'https://logongo.herokuapp.com/api/logs-yesterday/';
  apiURLpetrolLogsYesterday = 'http://127.0.0.1:8000/api/logs-yesterday/';
  apiFuelLogs = 'http://127.0.0.1:8000/api/fuel-logs-today/';
  // apiURLpetrolLogs2 = 'https://logongo.herokuapp.com/api/fuel-logs-ii-today/';
  apiFuelLogs2 = 'http://127.0.0.1:8000/api/fuel-logs-ii-today/';
  // apiURLpetrolLogs3 = 'https://logongo.herokuapp.com/api/fuel-logs-iii-today/';
  apiFuelLogs3 = 'http://127.0.0.1:8000/api/fuel-logs-iii-today/';
  // apiURLpetrolLogs4 = 'https://logongo.herokuapp.com/api/fuel-logs-iv-today/';
  apiFuelLogs4 = 'http://127.0.0.1:8000/api/fuel-logs-iv-today/';
  // apiURLmpesaLogs = 'https://logongo.herokuapp.com/api/mpesa-logs-today/';
  apiURLmpesaLogs = 'http://127.0.0.1:8000/api/mpesa-logs-today/';

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

  getAllLogs(): Observable<any>{
    return this.http.get<any>(this.apiURLallLogs);
  }
  getUserLogs(id: any): Observable<any>{
    return this.http.get<any>(this.apiURLuserLogs + id);
  }
  getFuelLogs(id:any): Observable<Log>{
    return this.http.get<Log>(this.apiFuelLogs + id);
  }
  getFuelLogs2(id:any): Observable<Log>{
    return this.http.get<Log>(this.apiFuelLogs2 + id);
  }
  getFuelLogs3(id:any): Observable<Log>{
    return this.http.get<Log>(this.apiFuelLogs3 + id);
  }
  getFuelLogs4(id:any): Observable<Log>{
    return this.http.get<Log>(this.apiFuelLogs4 + id);
  }
  getMpesaLogs(): Observable<LogMpesa>{
    return this.http.get<LogMpesa>(this.apiURLmpesaLogs);
  }
  getLogDetails(id: number): Observable<Log>{
    return this.http.get<Log>(this.apiURLlogDetails + id);
  }
  updateLogDetails(id,data): Observable<Log>{
    return this.http.put<Log>(this.apiURLlogDetails + id, data).pipe(
      catchError(this.handleError)
    );
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
