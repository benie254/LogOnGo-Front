import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/classes/profile/profile';

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
  
}
