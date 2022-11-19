import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { RequestHandlerService } from 'src/app/helpers/requests/request-handler.service';

// const apiURL = 'https://logongo.herokuapp.com/api/';
const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'any'
})
export class FuelService {
  apiAllFuels = apiURL + 'fuels/all/';
  apiFuelInfo = apiURL + 'fuel/info/';
  apiFuelSummary = apiURL + 'fuel/summary/today/';
  apiAllFuelReceived = apiURL + 'fuel/received/today/all/';
  apiFuelReceivedInfo = apiURL + 'fuel/received/today/info/';
  apiTotalFuelReceived = apiURL + 'fuel/received/today/total/'

  constructor(
    private handler:RequestHandlerService,
    ) { }

  getFuels(): Observable<Fuel>{
    return this.handler.handleGET<Fuel>(this.apiAllFuels)
  }
  addFuel(fuel_info: any): Observable<Fuel>{
    return this.handler.handlePOST<Fuel>(this.apiAllFuels, fuel_info);
  }
  addFuelReceived(data, id:number): Observable<Fuel>{
    return this.handler.handlePOST<Fuel>(this.apiAllFuelReceived + id, data);
  }
  getFuelInfo(id:number): Observable<Fuel>{
    return this.handler.handleGET<Fuel>(this.apiFuelInfo + id)
  }
  getFuelSummary(id:number): Observable<any>{
    return this.handler.handleGET<any>(this.apiFuelSummary)
  }
  getAllFuelReceived(): Observable<any>{
    return this.handler.handleGET<any>(this.apiAllFuelReceived)
  }
  getFuelReceivedInfo(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.apiFuelReceivedInfo + id)
  }
  getTotalFuelReceived(id: number): Observable<any>{
    return this.handler.handleGET<any>(this.apiTotalFuelReceived + id)
  }
  updateFuelInfo(data:Fuel, id:number): Observable<Fuel>{
    return this.handler.handlePUT<Fuel>(this.apiFuelInfo + id, data)
  }
}
