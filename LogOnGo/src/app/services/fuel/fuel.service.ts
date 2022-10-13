import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Fuel } from 'src/app/classes/fuel/fuel';

// const apiURL = 'https://logongo.herokuapp.com/api/';
const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class FuelService {
  apiURLpetrol = apiURL + 'petrol-info/';
  apiURLdiesel = apiURL + 'diesel-info/';
  apiURLgas = apiURL + 'gas-info/';
  apiURLfuels = apiURL + 'our-fuels/';
  apiURLdieselReceived = apiURL + 'diesel-received-today/info/';
  apiURLgasReceived = apiURL + 'gas-received-today/info/';
  apiURLpetrolReceived = apiURL + 'petrol-received-today/info/';
  apiURLlastFuelReceived = apiURL + 'total-fuel-received-today/';
  apiURLallFuelsReceived = apiURL + 'all-fuel-received-today/';
  apiTotalPetrolReceived = apiURL + 'total-petrol-received-today/';
  apiTotalDieselReceived = apiURL + 'total-diesel-received-today/';
  apiTotalGasReceived = apiURL + 'total-gas-received-today/';
  apiPetrolReceivedInfo = apiURL + 'petrol-received-today/info/';
  apiDieselReceivedInfo = apiURL + 'diesel-received-today/info/';
  apiGasReceivedInfo = apiURL + 'gas-received-today/info/';
  apiPetrolSummary = apiURL + 'petrol-summary-today/';
  apiDieselSummary = apiURL + 'diesel-summary-today/';
  apiGasSummary = apiURL + 'gas-summary-today/';



  constructor(private http:HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getFuels(): Observable<Fuel>{
    return this.http.get<Fuel>(this.apiURLfuels)
  }


  addFuel(fuel_info: any) {
    return this.http.post(this.apiURLfuels, fuel_info);
  }
  addDieselReceived(diesel_received: any) {
    return this.http.post(this.apiURLdieselReceived, diesel_received);
  }
  addGasReceived(gas_received: any) {
    return this.http.post(this.apiURLgasReceived, gas_received);
  }
  addFuelReceived(data) {
    return this.http.post(this.apiURLallFuelsReceived, data);
  }

  getPetrolInfo(): Observable<Fuel>{
    return this.http.get<Fuel>(this.apiURLpetrol)
  }
  getDieselInfo(): Observable<Fuel>{
    return this.http.get<Fuel>(this.apiURLdiesel)
  }
  getGasInfo(): Observable<Fuel>{
    return this.http.get<Fuel>(this.apiURLgas)
  }
  getPetrolSummary(): Observable<any>{
    return this.http.get<any>(this.apiPetrolSummary)
  }
  getDieselSummary(): Observable<any>{
    return this.http.get<any>(this.apiDieselSummary)
  }
  getGasSummary(): Observable<any>{
    return this.http.get<any>(this.apiGasSummary)
  }

  getPetrolReceived(id: number): Observable<any>{
    return this.http.get<any>(this.apiTotalPetrolReceived + id)
  }
  getPetrolReceivedInfo(id: number): Observable<any>{
    return this.http.get<any>(this.apiPetrolReceivedInfo + id)
  }
  getDieselReceived(id: number): Observable<any>{
    return this.http.get<any>(this.apiTotalDieselReceived + id)
  }
  getDieselReceivedInfo(id: number): Observable<any>{
    return this.http.get<any>(this.apiDieselReceivedInfo + id)
  }
  getGasReceived(id: number): Observable<any>{
    return this.http.get<any>(this.apiTotalGasReceived + id)
  }
  getGasReceivedInfo(id: number): Observable<any>{
    return this.http.get<any>(this.apiGasReceivedInfo + id)
  }

  updatePetrolInfo(petrol_info:Fuel): Observable<Fuel>{
    return this.http.put<Fuel>(this.apiURLpetrol, petrol_info).pipe(
      catchError(this.handleError)
    );
  }
  updateDieselInfo(diesel_info:Fuel): Observable<Fuel>{
    return this.http.put<Fuel>(this.apiURLdiesel, diesel_info).pipe(
      catchError(this.handleError)
    );
  }
  updateGasInfo(gas_info:Fuel): Observable<Fuel>{
    return this.http.put<Fuel>(this.apiURLgas, gas_info).pipe(
      catchError(this.handleError)
    );
  }

  
}
