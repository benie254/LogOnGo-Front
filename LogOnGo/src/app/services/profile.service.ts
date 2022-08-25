import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent,HttpInterceptor,HttpHandler,HttpRequest, } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs'; 
import { catchError, retry } from 'rxjs/operators';
import { Profile } from '../classes/profile/profile';

@Injectable({
  providedIn: 'root'
})


export class ProfileService {
  apiURL = 'https://logongo-api.herokuapp.com/profile-details/'
  apiURL2 = 'https://logongo-api.herokuapp.com/gas-info/'
  apiURL3 = 'https://logongo-api.herokuapp.com/our-fuels/'

  constructor(private http:HttpClient) { }

  getProfileDetails(id:number): Observable<Profile>{
    return this.http.get<Profile>(this.apiURL + id)
  }

  addFuel(fuel_info: any) {
    return this.http.post(this.apiURL3, fuel_info);
  }

  getGasInfo(): Observable<Profile>{
    return this.http.get<Profile>(this.apiURL)
  }
}
