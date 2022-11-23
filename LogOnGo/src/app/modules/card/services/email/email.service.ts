import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';

const apiURL = 'http://127.0.0.1:8000/api/'

@Injectable({
  providedIn: 'any'
})
export class EmailService {
  apiCardReport = apiURL + 'log/card/email/report/';
  apiDelCard = apiURL + 'log/card/delete/request/';

  constructor(
    private handler:RequestHandlerService
  ) { }
  emailCardReport(card_report: any): Observable<any>{
    return this.handler.handlePOST<any>(this.apiCardReport, card_report);
  }
  deleteCard(logData): Observable<any>{
    return this.handler.handlePOST<any>(this.apiDelCard, logData)
  }
}
