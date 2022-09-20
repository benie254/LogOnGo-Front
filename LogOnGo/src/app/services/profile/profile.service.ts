import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/classes/announcement/announcement';
import { Profile } from 'src/app/classes/profile/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiURL = 'https://logongo.herokuapp.com/api/user-profile/'
  // apiURL = 'http://127.0.0.1:8000/api/user-profile/'
  apiURL2 = 'https://logongo.herokuapp.com/api/gas-info/'
  // apiURL2 = 'http://127.0.0.1:8000/api/gas-info/'
  apiURL3 = 'https://logongo.herokuapp.com/api/our-fuels/'
  // apiURL3 = 'http://127.0.0.1:8000/api/our-fuels/'
  // apiURLannouncements = 'https://logongo.herokuapp.com/api/announcements/'
  apiURLannouncements = 'http://127.0.0.1:8000/api/announcements/'

  constructor(private http:HttpClient) { }

  getProfileDetails(): Observable<Profile>{
    return this.http.get<Profile>(this.apiURL)
  }
  getAnnouncements(): Observable<Announcement>{
    return this.http.get<Announcement>(this.apiURLannouncements)
  }
  
}
