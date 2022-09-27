import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Fuel } from 'src/app/classes/fuel/fuel';

@Injectable({
  providedIn: 'root'
})
export class FuelService {
  // apiURLpetrol = 'https://logongo.herokuapp.com/api/petrol-info/';
  apiURLpetrol = 'http://127.0.0.1:8000/api/petrol-info/';
  // apiURLdiesel = 'https://logongo.herokuapp.com/api/diesel-info/';
  apiURLdiesel = 'http://127.0.0.1:8000/api/diesel-info/';
  // apiURLgas = 'https://logongo.herokuapp.com/api/gas-info/';
  apiURLgas = 'http://127.0.0.1:8000/api/gas-info/';
  // apiURLfuels = 'https://logongo.herokuapp.com/api/our-fuels/';
  apiURLfuels = 'http://127.0.0.1:8000/api/our-fuels/';
  // apiURLdieselReceived = 'https://logongo.herokuapp.com/api/diesel-received-today/info/';
  apiURLdieselReceived = 'http://127.0.0.1:8000/api/diesel-received-today/info/';
  // apiURLgasReceived = 'https://logongo.herokuapp.com/api/gas-received-today/info/';
  apiURLgasReceived = 'http://127.0.0.1:8000/api/gas-received-today/info/';
  // apiURLpetrolReceived = 'https://logongo.herokuapp.com/api/petrol-received-today/info/';
  apiURLlastFuelReceived = 'http://127.0.0.1:8000/api/total-fuel-received-today/';
  apiURLallFuelsReceived = 'http://127.0.0.1:8000/api/all-fuel-received-today/';
  apiTotalPetrolReceived = 'http://127.0.0.1:8000/api/total-petrol-received-today/';
  apiTotalDieselReceived = 'http://127.0.0.1:8000/api/total-diesel-received-today/';
  apiTotalGasReceived = 'http://127.0.0.1:8000/api/total-gas-received-today/';
  apiPetrolReceivedInfo = 'http://127.0.0.1:8000/api/petrol-received-today/info/';
  apiDieselReceivedInfo = 'http://127.0.0.1:8000/api/diesel-received-today/info/';
  apiGasReceivedInfo = 'http://127.0.0.1:8000/api/gas-received-today/info/';

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
  addFuelReceived(fuel_received: any) {
    return this.http.post(this.apiURLallFuelsReceived, fuel_received);
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

  getPetrolReceived(): Observable<any>{
    return this.http.get<any>(this.apiTotalPetrolReceived)
  }
  getPetrolReceivedInfo(): Observable<any>{
    return this.http.get<any>(this.apiPetrolReceivedInfo)
  }
  getDieselReceived(): Observable<any>{
    return this.http.get<any>(this.apiTotalDieselReceived)
  }
  getDieselReceivedInfo(): Observable<any>{
    return this.http.get<any>(this.apiDieselReceivedInfo)
  }
  getGasReceived(): Observable<any>{
    return this.http.get<any>(this.apiTotalGasReceived)
  }
  getGasReceivedInfo(): Observable<any>{
    return this.http.get<any>(this.apiGasReceivedInfo)
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
