import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private http:HttpClient) { }

  getAllMpesaLogs(): Observable<LogMpesa>{
    return this.http.get<LogMpesa>(this.apiURLallMpesaLogs);
  }
  getUserMpesaLogs(id: any): Observable<LogMpesa>{
    return this.http.get<LogMpesa>(this.apiURLuserMpesaLogs + id);
  }

  addMpesaLog(date,transaction_number,customer_name,customer_phone_number,amount,amount_transferred_to_bank: LogMpesa) {
    return this.http.post(this.apiURLtodayMpesaLogs, {date,transaction_number,customer_name,customer_phone_number,amount,amount_transferred_to_bank});
  }
}
