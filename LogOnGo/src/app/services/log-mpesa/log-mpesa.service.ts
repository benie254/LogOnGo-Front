import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';

@Injectable({
  providedIn: 'root'
})
export class LogMpesaService {

  // apiURLaddMpesaLogs = 'https://logongo.herokuapp.com/api/mpesa-logs-today/'
  apiURLaddMpesaLogs = 'http://127.0.0.1:8000/api/mpesa-logs-today/';
  apiURLuserMpesaLogs = 'https://logongo.herokuapp.com/api/user-mpesa-logs/';
  // apiURLuserMpesaLogs = 'http://127.0.0.1:8000/api/user-mpesa-logs/';

  constructor(private http:HttpClient) { }

  getAllMpesaLogs(): Observable<LogMpesa>{
    return this.http.get<LogMpesa>(this.apiURLaddMpesaLogs);
  }
  getUserMpesaLogs(id: any): Observable<LogMpesa>{
    return this.http.get<LogMpesa>(this.apiURLuserMpesaLogs + id);
  }

  addMpesaLog(mpesa_info: LogMpesa) {
    return this.http.post(this.apiURLaddMpesaLogs, mpesa_info);
  }
}
