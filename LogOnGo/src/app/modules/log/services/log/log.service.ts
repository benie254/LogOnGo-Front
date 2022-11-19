import { Injectable, Input } from '@angular/core';
// import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Log } from 'src/app/classes/log/log';
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';

// const apiURL = 'https://logongo.herokuapp.com/api/';
const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'any'
})

export class LogService {
  apiAllLogs = apiURL + 'logs/all/';
  apiLogsToday = apiURL + 'logs/today/';
  apiUserLogs = apiURL + 'logs/user/';
  apiPumpFuelLogs = apiURL + 'logs/today/fuel/';
  apiPumpFuelLogsII = apiURL + '/pump/';
  apiLogDetails = apiURL + 'log/details/';
  apiPastLogs = apiURL + 'logs/past/';
  
  constructor(
    private handler:RequestHandlerService,
    ) { }

  getAllLogs(): Observable<any>{
    return this.handler.handleGET<any>(this.apiAllLogs);
  }
  getUserLogs(id: any): Observable<any>{
    return this.handler.handleGET<any>(this.apiUserLogs + id);
  }
  getPumpFuelLogs(pumpId:number, fuelId:number): Observable<Log>{
    return this.handler.handleGET<any>(this.apiPumpFuelLogs + fuelId + this.apiPumpFuelLogsII + pumpId);
  }
  getLogDetails(id: number): Observable<Log>{
    return this.handler.handleGET<any>(this.apiLogDetails + id);
  }
  updateLogInfo(id, data): Observable<Log>{
    return this.handler.handlePUT<any>(this.apiLogDetails + id, data);
  }
  addLog(log_info: any): Observable<any>{
    return this.handler.handlePOST<any>(this.apiLogsToday, log_info);
  }
  searchLog(): Observable<Log>{
    return this.handler.handleGET<any>(this.apiAllLogs)
  }
  searchByDate(logDate:string): Observable<Log>{
    return this.handler.handleGET<any>(this.apiPastLogs + logDate)
  }
}
