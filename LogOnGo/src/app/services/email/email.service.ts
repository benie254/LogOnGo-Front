import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// const apiURL = 'https://logongo.herokuapp.com/api/';
const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  apiURLfuels = apiURL + 'incident-report/';
  apiContact = apiURL + 'contact-admin/';

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
