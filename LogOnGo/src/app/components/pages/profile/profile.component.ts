import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/classes/announcement/announcement';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { TokenStorageService } from 'src/app/services/token/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  mpesa_logs: any;
  user_logs: any; 
  announcements: Announcement;
  currentUser = this.authService.currentUserValue;

  constructor(
    private tokenStorage:TokenStorageService,
    private authService:AuthService,
    private profileService:ProfileService,
    ) { 
      this.profileService.getAnnouncements().subscribe((data) => {
        this.announcements = data 
        console.warn(this.announcements)
      })
    }

  ngOnInit(): void {
    // this.currentUser = this.tokenStorage.getUser();
  }

}
