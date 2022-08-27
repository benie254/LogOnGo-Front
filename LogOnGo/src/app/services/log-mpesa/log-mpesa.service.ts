import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogMpesaService {

  apiURLaddMpesaLogs = 'https://logongo-api.herokuapp.com/add-mpesa-logs-today/'

  constructor(private http:HttpClient) { }

  addMpesaLog(mpesa_info: any) {
    return this.http.post(this.apiURLaddMpesaLogs, mpesa_info);
  }
}
