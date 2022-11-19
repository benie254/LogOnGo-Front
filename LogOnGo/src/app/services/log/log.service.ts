import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
// import { NgControl } from '@angular/forms';
import { catchError, Observable, shareReplay, throwError } from 'rxjs';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { Log } from 'src/app/classes/log/log';
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';

// const apiURL = 'https://logongo.herokuapp.com/api/';
const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  apiURLtodayLogs = apiURL + 'logs-today/';
  apiURLuserLogs = apiURL + 'user-logs/';
  apiURLallLogs = apiURL + 'logs/all/';
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
    private handler:RequestHandlerService,
    ) { }


  getAllLogs(): Observable<any>{
    return this.handler.handleGET(this.apiURLallLogs);
  }
  getUserLogs(id: any): Observable<any>{
    return this.handler.handleGET(this.apiURLuserLogs + id);
  }
  getFuelLogs(id:any): Observable<Log>{
    return this.handler.handleGET(this.apiFuelLogs + id);
  }
  getFuelLogs2(id:any): Observable<Log>{
    return this.handler.handleGET(this.apiFuelLogs2 + id);
  }
  getFuelLogs3(id:any): Observable<Log>{
    return this.handler.handleGET(this.apiFuelLogs3 + id);
  }
  getFuelLogs4(id:any): Observable<Log>{
    return this.handler.handleGET(this.apiFuelLogs4 + id);
  }
  getMpesaLogs(): Observable<LogMpesa>{
    return this.handler.handleGET(this.apiURLmpesaLogs);
  }
  getLogDetails(id: number): Observable<Log>{
    return this.handler.handleGET(this.apiURLlogDetails + id);
  }
  updateLogDetails(id,data): Observable<Log>{
    return this.handler.handlePUT(this.apiURLlogDetails + id, data);
  }
  getPetrolLogDetails(id: number): Observable<Log>{
    return this.handler.handleGET(this.apiURLpetrolLogDetails + id);
  }


  addLog(log_info: any) {
    return this.handler.handlePOST(this.apiURLtodayLogs, log_info);
  }

  updateLogInfo(log_info:Log): Observable<Log>{
    return this.handler.handlePUT(this.apiURLtodayLogs, log_info)
  }

  searchLog(): Observable<Log>{
    return this.handler.handleGET(this.apiURLallLogs)
  }
  searchByDate(logDate:string): Observable<Log>{
    return this.handler.handleGET(this.apiSearch + logDate)
  }
  deleteLog(logData): Observable<any>{
    return this.handler.handlePOST(this.apiDelLog, logData)
  }
}
