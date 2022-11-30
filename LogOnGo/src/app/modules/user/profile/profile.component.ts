import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import * as Notiflix from 'notiflix';
import { Log } from 'src/app/classes/log/log';
import { AuthService } from '../../auth/services/auth/auth.service';
import { LogService } from '../../log/services/log/log.service';
import { MpesaService } from '../../mpesa/services/mpesa/mpesa.service';
import { UserService } from '../services/user/user.service';

declare function toggleProfileLogForm(): any;
declare function toggleProfileMpesaForm(): any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  
  
  date = new Date();
  userMpesa: any;
  userLogs: Log; 
  userCards: any;
  announcements: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [2, 5, 10, 15];
  currentUser = this.auth.currentUserValue;
  
  info: any; 
  isExpanded: boolean = false;
  panelOpenState = false;
  id: number;
  foundAnnouncements: boolean;
  changeConfirmed: boolean = false;
  resetConfirmed: boolean = false;

  constructor(
    private auth:AuthService,
    private log:LogService,
    private mpesa:MpesaService,
    private user:UserService,
    private route:ActivatedRoute,
    private router:Router,
    ) { 

    
    }

  ngOnInit(): void {
    this.getAnnouncements();
    this.route.params.subscribe(params => this.getUserMpesaLogs(params['id']));
    this.route.params.subscribe(params => this.getUserLogs(params['id']));
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => this.getUserCardLogs(params['id']))
    
    
    // this.currentUser = this.tokenStorage.getUser();
  }
  setView(view: CalendarView){
    this.view = view;
  }


  getAnnouncements(){
    this.user.getLatestAnnouncements().subscribe({
      next: (data) => {
        this.announcements = data 
        // this.foundAnnouncements = true;
        if(!this.announcements || this.announcements == undefined || this.announcements && this.announcements == 0){
          this.foundAnnouncements = false;
        } else {
          this.foundAnnouncements = true;
        }
      }
    })
  }


  addLog(log_info: any) {
    console.warn(log_info);
    this.log.addLog(log_info).subscribe({ 
      next: (result) => {
        console.warn('result', result);
        Notiflix.Notify.success('Petrol log added successful!');
        this.ngOnInit();
      }
    });
  }

  addMpesaLog(mpesa_info: any) {
    this.mpesa.addMpesaLog(mpesa_info).subscribe({
      next: (result) => {
        console.warn('result', result);
        Notiflix.Notify.success('Mpesa log added successful!');
        this.ngOnInit();
      }
    });
  }

  getUserLogs(id): void{
    this.log.getUserLogs(id).subscribe({
      next: (data) => {
        this.userLogs = data
      }
    });
  }

  getUserMpesaLogs(id:number): void{
    this.mpesa.getUserMpesaLogs(id).subscribe({
      next: (data) => {
        this.userMpesa = data
      }
    });
  }
  getUserCardLogs(id): void{
    this.log.getUserLogs(id).subscribe({
      next: (data) => {
        this.userCards = data
      }
    });
  }
  goToLogForm(){
    let x = document.querySelector("#profileLogForm");
    if (x){
      x.scrollIntoView();
    }
  }
  goToMpesaLogForm(){
    let x = document.querySelector("#profileMpesaForm");
    if (x){
      x.scrollIntoView();
    }
  }
  changeWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to change your password?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.warning(
          "Please note",
          "After updating your password, we will log you out so that you can log in with your new password.",
          "Proceed",
        )
        this.changeConfirmed = true;
        this.router.navigate(['/auth/change/password/' + this.currentUser.id])
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "You have canceled a password change request. If you didn't mean to, please make a new request.",
          'Great',
        )
        this.changeConfirmed = false;
      }
    )
  }
  resetWarn(){
    Notiflix.Confirm.show(
      'Confirm reset',
      "Are you sure you want to reset your password?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.info(
          "Please note",
          "Click the button that will appear next to receive a password reset link in your email.",
          "Okay",
        )
        this.resetConfirmed = true;
        this.router.navigate(['/auth/reset/password/request/' + this.currentUser.id]);
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "You have canceled a password reset request. If you didn't mean to, please make a new request.",
          'Great',
        )
        this.resetConfirmed = false;
      }
    )
  }
}
