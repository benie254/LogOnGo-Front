import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';

@Injectable({
  providedIn: 'root'
})
export class LogMpesaService {

  apiURLaddMpesaLogs = 'https://logongo-api.herokuapp.com/add-mpesa-logs-today/'

  constructor(private http:HttpClient) { }

  getAllLogs(): Observable<LogMpesa>{
    return this.http.get<LogMpesa>(this.apiURLaddMpesaLogs);
  }

  addMpesaLog(mpesa_info: any) {
    return this.http.post(this.apiURLaddMpesaLogs, mpesa_info);
  }
}
