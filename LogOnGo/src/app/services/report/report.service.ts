import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// const apiURL = 'https://logongo.herokuapp.com/api/';
const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  apiURLlogReport = apiURL + 'email-report/';
  apiMpesaReport = apiURL + 'email-mpesa-report/';

  constructor(
    private http:HttpClient,
  ) { }

  emailLogReport(report_info: any) {
    return this.http.post(this.apiURLlogReport, report_info);
  }
  emailMpesaReport(report_info: any) {
    return this.http.post(this.apiMpesaReport, report_info);
  }
}
