import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';

// const apiURL = 'https://logongo.herokuapp.com/api/';
const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'any'
})
export class EmailService {
  apiIncident = apiURL + 'incident/report/';
  apiContact = apiURL + 'contact/admin/';
  apiLogReport = apiURL + 'log/email/report/';
  apiMpesaReport = apiURL + 'log/mpesa/email/report/';
  apiCardReport = apiURL + 'log/card/email/report/';
  apiDelCard = apiURL + 'log/card/delete/request/';
  apiDelMpesa = apiURL + 'log/mpesa/delete/request/';
  apiDelLog = apiURL + 'log/delete/request/'

  constructor(
    private handler:RequestHandlerService,
    ) { }

  emailLogReport(mpesa_report: any): Observable<any>{
    return this.handler.handlePOST<any>(this.apiMpesaReport, mpesa_report);
  }
  emailMpesaReport(mpesa_report: any): Observable<any>{
    return this.handler.handlePOST<any>(this.apiMpesaReport, mpesa_report);
  }
  emailCardReport(mpesa_report: any): Observable<any>{
    return this.handler.handlePOST<any>(this.apiMpesaReport, mpesa_report);
  }
  emailIncidentReport(incident_report: any): Observable<any>{
    return this.handler.handlePOST<any>(this.apiIncident, incident_report);
  }
  contactAdmin(message: any): Observable<any>{
    return this.handler.handlePOST<any>(this.apiContact, message);
  }
  deleteCard(logData): Observable<any>{
    return this.handler.handlePOST<any>(this.apiDelCard, logData)
  }
  deleteLog(logData): Observable<any>{
    return this.handler.handlePOST<any>(this.apiDelLog, logData)
  }
  deleteMpesa(logData): Observable<any>{
    return this.handler.handlePOST<any>(this.apiDelMpesa, logData)
  }
}
