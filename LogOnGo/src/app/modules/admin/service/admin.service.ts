import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/classes/announcement/announcement';
import { CreditCard } from 'src/app/classes/card/credit-card';
import { Contact } from 'src/app/classes/contact/contact';
import { FuelReceived } from 'src/app/classes/fuel-received/fuel-received';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { Incident } from 'src/app/classes/incident/incident';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { Log } from 'src/app/classes/log/log';
import { User } from 'src/app/classes/user/user';
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';

const apiURL = 'http://127.0.0.1:8000/api/'
// const apiURL = 'https://logongo-api-production.up.railway.app/api/'

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
  addAnnouncement(data: Announcement): Observable<Announcement>{
    return this.handler.handlePOST<Announcement>(this.announce, data)
  }
  editAnnouncement(id: number,data: Announcement): Observable<Announcement>{
    return this.handler.handlePUT<Announcement>(this.editAnnounce + id, data)
  }
  getAnnouncementDetails(id: number): Observable<Announcement>{
    return this.handler.handleGET<Announcement>(this.editAnnounce + id)
  }
  deleteAnnouncement(id: number): Observable<Announcement>{
    return this.handler.handleDEL<Announcement>(this.editAnnounce + id)
  }
  getAllContacts(): Observable<Contact>{
    return this.handler.handleGET<Contact>(this.allContacts)
  }
  getContactDetails(id: number): Observable<Contact>{
    return this.handler.handleGET<Contact>(this.delContact + id)
  }
  deleteContact(id: number): Observable<Contact>{
    return this.handler.handleDEL<Contact>(this.delContact + id)
  }
  getIncidentReports(): Observable<Incident>{
    return this.handler.handleGET<Incident>(this.incidents)
  }
  getIncidentDetails(id: number): Observable<Incident>{
    return this.handler.handleGET<Incident>(this.incidentDetails + id)
  }
  deleteIncident(id: number): Observable<Incident>{
    return this.handler.handleDEL<Incident>(this.incidentDetails + id)
  }
  deleteFuel(id: number): Observable<Fuel>{
    return this.handler.handleDEL<Fuel>(this.fuelDetails + id)
  }
  deleteCard(id: number): Observable<CreditCard>{
    return this.handler.handleDEL<CreditCard>(this.cardDetails + id)
  }
  getFuelReceivedDetails(id: number): Observable<FuelReceived>{
    return this.handler.handleGET<FuelReceived>(this.fuelDetails + id)
  }
  editFuelReceived(id: number,data: FuelReceived): Observable<FuelReceived>{
    return this.handler.handlePUT<FuelReceived>(this.fuelDetails + id, data)
  }
  deleteFuelReceived(id: number): Observable<FuelReceived>{
    return this.handler.handleDEL<FuelReceived>(this.fuelDetails + id)
  }
  deleteMpesa(id: number): Observable<LogMpesa>{
    return this.handler.handleDEL<LogMpesa>(this.mpesaDetails + id)
  }
  deleteLog(id: number): Observable<Log>{
    return this.handler.handleDEL<Log>(this.logDetails + id)
  }
}
