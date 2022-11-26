import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/classes/announcement/announcement';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-profile-announcements',
  templateUrl: './profile-announcements.component.html',
  styleUrls: ['./profile-announcements.component.css']
})
export class ProfileAnnouncementsComponent implements OnInit {
  date: any; 
  announcements: any;
  
  constructor(
    private user:UserService,
  ) {
    this.user.getLatestAnnouncements().subscribe((data) => {
      this.announcements = data 
    })
   }
  ngOnInit(): void {
  }

}
