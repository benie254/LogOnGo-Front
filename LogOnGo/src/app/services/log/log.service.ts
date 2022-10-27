import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
// import { NgControl } from '@angular/forms';
import { catchError, Observable, shareReplay, throwError } from 'rxjs';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { Log } from 'src/app/classes/log/log';

// const apiURL = 'https://logongo.herokuapp.com/api/';
const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  apiURLtodayLogs = apiURL + 'logs-today/';
  apiURLuserLogs = apiURL + 'user-logs/';
  apiURLallLogs = apiURL + 'all-logs/';
  apiURLpetrolLogDetails = apiURL + 'petrol-log-details/';
  apiURLlogDetails = apiURL + 'log-details/';
  apiFuelLogs = apiURL + 'fuel-logs-today/';
  apiFuelLogs2 = apiURL + 'fuel-logs-ii-today/';
  apiFuelLogs3 = apiURL + 'fuel-logs-iii-today/';
  apiFuelLogs4 = apiURL + 'fuel-logs-iv-today/';
  apiURLmpesaLogs = apiURL + 'mpesa-logs-today/';
  apiSearch = apiURL + 'past-logs/';
  apiDelLog = apiURL + 'delete-log/request/';
  
  

  constructor(
    private http:HttpClient,
    ) { }

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
    return this.http.put<Log>(this.apiURLlogDetails + id, data);
  }
  getPetrolLogDetails(id: number): Observable<Log>{
    return this.http.get<Log>(this.apiURLpetrolLogDetails + id);
  }


  addLog(log_info: any) {
    return this.http.post(this.apiURLtodayLogs, log_info);
  }

  updateLogInfo(log_info:Log): Observable<Log>{
    return this.http.put<Log>(this.apiURLtodayLogs, log_info).pipe(
      catchError(this.handleError)
    );
  }

  searchLog(): Observable<Log>{
    return this.http.get<Log>(this.apiURLallLogs)
  }
  searchByDate(logDate:string): Observable<Log>{
    return this.http.get<Log>(this.apiSearch + logDate)
  }
  deleteLog(logData): Observable<any>{
    return this.http.post<any>(this.apiDelLog, logData)
  }
}
