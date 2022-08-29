import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  apiURLfuels = 'https://logongo-api.herokuapp.com/our-fuels/'

  constructor(private http:HttpClient) { }

  emailMpesaReport(mpesa_report: any) {
    return this.http.post(this.apiURLfuels, mpesa_report);
  }
  emailIncidentReport(incident_report: any){
    return this.http.post(this.apiURLfuels, incident_report);
  }
}
