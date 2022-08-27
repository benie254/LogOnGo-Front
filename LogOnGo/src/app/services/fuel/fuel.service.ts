import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Fuel } from 'src/app/classes/fuel/fuel';

@Injectable({
  providedIn: 'root'
})
export class FuelService {
  apiURLpetrol = 'https://logongo-api.herokuapp.com/petrol-info/'
  apiURLdiesel = 'https://logongo-api.herokuapp.com/diesel-info/'
  apiURLgas = 'https://logongo-api.herokuapp.com/gas-info/'
  apiURLfuels = 'https://logongo-api.herokuapp.com/our-fuels/'
  apiURLdieselReceived = 'https://logongo-api.herokuapp.com/diesel-received-today/info/'

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


  addFuel(fuel_info: any) {
    return this.http.post(this.apiURLfuels, fuel_info);
  }
  addDieselReceived(diesel_received: any) {
    return this.http.post(this.apiURLfuels, diesel_received);
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
