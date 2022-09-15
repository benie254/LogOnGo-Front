import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/classes/profile/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiURL = 'https://logongo.herokuapp.com/api/user-profile/'
  apiURL2 = 'https://logongo.herokuapp.com/api/gas-info/'
  apiURL3 = 'https://logongo.herokuapp.com/api/our-fuels/'

  constructor(private http:HttpClient) { }

  getProfileDetails(): Observable<Profile>{
    return this.http.get<Profile>(this.apiURL)
  }
  
}
