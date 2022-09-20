import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Announcement } from 'src/app/classes/announcement/announcement';
import { Log } from 'src/app/classes/log/log';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
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
  logs: Log = {
    id: 0,
    date: '',
    eod_reading_lts: 0.00,
    eod_reading_yesterday: 0.00,
    total_litres_sold: 0.00,
    amount_earned_today: 0,
    fuel: 0,
    logged_by: '',
    user_id: 0,
    balance: 0.00,
    balance_yesterday: 0.00,
    updated_balance: 0.00,
    first_logged: '',
    last_edited: ''
  };
  info: any; 

  constructor(
    private tokenStorage:TokenStorageService,
    private authService:AuthService,
    private profileService:ProfileService,
    private logService:LogService,
    private fuelService:FuelService,
    ) { 
      this.profileService.getAnnouncements().subscribe((data) => {
        this.announcements = data 
        console.warn(this.announcements)
      })

      this.fuelService.getPetrolInfo().subscribe((data) => {
        this.info = data
        console.warn("data",data)
      });
    }

  ngOnInit(): void {
    // this.currentUser = this.tokenStorage.getUser();
  }

  addLog(log_info: any) {
    console.warn(log_info);
    this.logService.addLog(log_info).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('Petrol log added successful!');
      this.ngOnInit();
    }, 
    err => {
      Notiflix.Notify.failure('Something went wrong!');
      Notiflix.Notify.warning('Please try again.');
    });
  }

}
