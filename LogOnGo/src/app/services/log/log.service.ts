import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  apiURLlogs = 'https://logongo-api.herokuapp.com/add-log-today/'

  constructor(private http:HttpClient) { }

  addLog(log_info: any) {
    return this.http.post(this.apiURLlogs, log_info);
  }
}
