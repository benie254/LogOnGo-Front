import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/classes/announcement/announcement';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile-announcements',
  templateUrl: './profile-announcements.component.html',
  styleUrls: ['./profile-announcements.component.css']
})
export class ProfileAnnouncementsComponent implements OnInit {
  date: any; 
  announcements: any;
  
  constructor(
    private profileService:ProfileService,
  ) {
    this.profileService.getAnnouncements().subscribe((data) => {
      this.announcements = data 
      console.warn(this.announcements)
    })
   }

  ngOnInit(): void {
  }

}
