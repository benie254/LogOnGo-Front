import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// const apiURL = 'https://logongo.herokuapp.com/api/';
const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  apiLogReport = apiURL + 'email-report/';
  apiMpesaReport = apiURL + 'email-mpesa-report/';
  apiCardReport = apiURL + 'email-card-report/';

  constructor(
    private http:HttpClient,
  ) { }

  emailLogReport(report_info: any) {
    return this.http.post(this.apiLogReport, report_info);
  }
  emailMpesaReport(report_info: any) {
    return this.http.post(this.apiMpesaReport, report_info);
  }
  emailCardReport(report_info: any) {
    return this.http.post(this.apiCardReport, report_info);
  }
}
