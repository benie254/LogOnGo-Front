import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  // apiURLlogReport = 'https://logongo.herokuapp.com/api/email-report/';
  apiURLlogReport = 'http://127.0.0.1:8000/api/email-report/';

  constructor(
    private http:HttpClient,
  ) { }

  addLog(report_info: any) {
    return this.http.post(this.apiURLlogReport, report_info);
  }
}