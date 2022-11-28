import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/classes/card/credit-card';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { Log } from 'src/app/classes/log/log';
import { User } from 'src/app/classes/user/user';
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';

const apiURL = 'http://127.0.0.1:8000/api/'

@Injectable({
  providedIn: 'any'
})
export class AdminService {
  logSummary = apiURL + 'logs/summary/';
  mpesaSummary = apiURL + 'mpesa/summary/';
  cardSummary = apiURL + 'card/summary/';
  allAdmins = apiURL + 'all/admins/';
  announce = apiURL + 'announcements/all/';
  editAnnounce = apiURL + 'announcements/update/';
  delContact = apiURL + 'contact/details/';
  allContacts = apiURL + 'contact/admin/';
  incidents = apiURL + 'incident/report/';
  incidentDetails = apiURL + 'incident/details/';
  fuelDetails = apiURL + 'fuel/info/';
  cardDetails = apiURL + 'log/card/details/';
  fuelRcvdDetails = apiURL + 'fuel/received/details/';
  mpesaDetails = apiURL + 'log/details/';
  logDetails = apiURL + 'log/mpesa/details/';

  constructor(
    private handler:RequestHandlerService,
    private http:HttpClient,
  ) { }

  getLogSummary(): Observable<Log>{
    return this.handler.handleGET<Log>(this.logSummary)
  }
  getCardSummary(): Observable<CreditCard>{
    return this.handler.handleGET<CreditCard>(this.cardSummary)
  }
  geMpesaSummary(): Observable<LogMpesa>{
    return this.handler.handleGET<LogMpesa>(this.mpesaSummary)
  }
  getAllAdmins(): Observable<User>{
    return this.handler.handleGET<User>(this.allAdmins)
  }
  addAnnouncement(data): Observable<any>{
    return this.handler.handlePOST<any>(this.announce, data)
  }
  editAnnouncement(id,data): Observable<any>{
    return this.handler.handlePUT<any>(this.editAnnounce + id, data)
  }
  getAnnouncementDetails(id): Observable<any>{
    return this.handler.handleGET<any>(this.editAnnounce + id)
  }
  deleteAnnouncement(id): Observable<any>{
    return this.http.delete<any>(this.editAnnounce + id)
  }
  getAllContacts(): Observable<User>{
    return this.handler.handleGET<User>(this.allContacts)
  }
  getContactDetails(id): Observable<any>{
    return this.handler.handleGET<any>(this.delContact + id)
  }
  deleteContact(id): Observable<any>{
    return this.http.delete<any>(this.delContact + id)
  }
  getIncidentReports(): Observable<any>{
    return this.handler.handleGET<any>(this.incidents)
  }
  getIncidentDetails(id): Observable<any>{
    return this.handler.handleGET<any>(this.incidentDetails + id)
  }
  deleteIncident(id): Observable<any>{
    return this.http.delete<any>(this.incidentDetails + id)
  }
  deleteFuel(id): Observable<any>{
    return this.http.delete<any>(this.fuelDetails + id)
  }
  deleteCard(id): Observable<any>{
    return this.http.delete<any>(this.cardDetails + id)
  }
  getFuelReceivedDetails(id): Observable<any>{
    return this.handler.handleGET<any>(this.fuelDetails + id)
  }
  editFuelReceived(id,data): Observable<any>{
    return this.handler.handlePUT<any>(this.fuelDetails + id, data)
  }
  deleteFuelReceived(id): Observable<any>{
    return this.http.delete<any>(this.fuelDetails + id)
  }
  deleteMpesa(id): Observable<any>{
    return this.http.delete<any>(this.mpesaDetails + id)
  }
  deleteLog(id): Observable<any>{
    return this.http.delete<any>(this.logDetails + id)
  }
}
