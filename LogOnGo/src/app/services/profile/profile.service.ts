import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/classes/announcement/announcement';
import { Profile } from 'src/app/classes/profile/profile';

// const apiURL = 'https://logongo.herokuapp.com/api/';
const apiURL = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiURL = apiURL + 'user-profile/';
  apiURL2 = apiURL + 'gas-info/';
  apiURL3 = apiURL + 'our-fuels/';
  apiURLannouncements = apiURL + 'announcements/';

  constructor(private http:HttpClient) { }

  getProfileDetails(): Observable<Profile>{
    return this.http.get<Profile>(this.apiURL)
  }
  getAnnouncements(): Observable<Announcement>{
    return this.http.get<Announcement>(this.apiURLannouncements)
  }
  
}
