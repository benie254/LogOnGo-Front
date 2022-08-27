import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { Log } from 'src/app/classes/log/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  apiURLtodayLogs = 'https://logongo-api.herokuapp.com/add-log-today/'
  apiURLallLogs = 'https://logongo-api.herokuapp.com/all-logs/'
  apiURLpetrolLogDetails = 'https://logongo-api.herokuapp.com/petrol-log-details/'
  apiURLpetrolLogs = 'https://logongo-api.herokuapp.com/fuel-logs-today/6'
  apiURLpetrolLogs2 = 'https://logongo-api.herokuapp.com/fuel-logs-ii-today/6'
  apiURLpetrolLogs3 = 'https://logongo-api.herokuapp.com/fuel-logs-iii-today/6'
  apiURLpetrolLogs4 = 'https://logongo-api.herokuapp.com/fuel-logs-iv-today/6'
  apiURLmpesaLogs = 'https://logongo-api.herokuapp.com/mpesa-logs-today/'

  constructor(private http:HttpClient) { }

  getAllLogs(): Observable<Log>{
    return this.http.get<Log>(this.apiURLallLogs);
  }
  getPetrolLogs(): Observable<Log>{
    return this.http.get<Log>(this.apiURLpetrolLogs);
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

  addLog(log_info: any) {
    return this.http.post(this.apiURLtodayLogs, log_info);
  }
}
