import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // apiURLfuels = 'http://127.0.0.1:8000/api/incident-report/';
  apiURLfuels = 'https://logongo.herokuapp.com/api/incident-report/';
  // apiContact = 'http://127.0.0.1:8000/api/contact-admin/';
  apiContact = 'https://logongo.herokuapp.com/api/contact-admin/';

  constructor(private http:HttpClient) { }

  emailMpesaReport(mpesa_report: any) {
    return this.http.post(this.apiURLfuels, mpesa_report);
  }
  emailIncidentReport(incident_report: any){
    return this.http.post(this.apiURLfuels, incident_report);
  }
  contactAdmin(message: any){
    return this.http.post(this.apiContact, message);
  }
}
