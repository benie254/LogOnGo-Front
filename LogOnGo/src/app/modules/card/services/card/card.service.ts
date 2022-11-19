import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/classes/card/credit-card'; 
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';

// const apiURL = 'https://logongo.herokuapp.com/api/';
const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'any'
})
export class CardService {

  apiAllCards = apiURL + 'logs/card/all/';
  apiTodayCards = apiURL + 'logs/card/today/';
  apiUserCards = apiURL + 'logs/card/user/';
  apiCardDetails = apiURL + 'log/card/details/';
  apiFuelPumps = apiURL + 'pumps/fuel/';

  constructor(
    private handler:RequestHandlerService,
    ) { }

  getAllCreditCardLogs(): Observable<CreditCard>{
    return this.handler.handleGET<CreditCard>(this.apiAllCards);
  }
  getUserCreditCardLogs(id: any): Observable<CreditCard>{
    return this.handler.handleGET<CreditCard>(this.apiUserCards + id);
  }
  getTodayCreditCardLogs(id: number): Observable<CreditCard>{
    return this.handler.handleGET<CreditCard>(this.apiTodayCards + id)
  }
  getCreditCardLogDetails(id: number): Observable<CreditCard>{
    return this.handler.handleGET<CreditCard>(this.apiCardDetails + id)
  }
  addCreditCardLog(creditCardInfo: CreditCard): Observable<CreditCard>{
    return this.handler.handlePOST<CreditCard>(this.apiAllCards, creditCardInfo);
  }
  updateCreditCardDetails(id,data): Observable<CreditCard>{
    return this.handler.handlePUT<CreditCard>(this.apiCardDetails + id, data)
  }
  getFuelPumps(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.apiFuelPumps + id)
  }
}
