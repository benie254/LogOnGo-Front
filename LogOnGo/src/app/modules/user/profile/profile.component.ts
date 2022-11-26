import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  mpesa_logs: any;
  userLogs: Log; 
  announcements: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [2, 5, 10, 15];
  currentUser = this.auth.currentUserValue;
  logs: Log = {
    id: 0,
    date: '',
    formatted_date: '',
    eod_reading_lts: 0.00,
    eod_reading_yesterday: 0.00,
    total_litres_sold: 0.00,
    amount_earned_today: 0,
    fuel: 0,
    fuel_type: '',
    price_per_litre: 0,
    pump: 0,
    pump_name: '',
    logged_by: '',
    user_id: 0,
    balance: 0.00,
    balance_yesterday: 0.00,
    updated_balance: 0.00,
    first_logged: '',
    last_edited: ''
  };
  info: any; 
  isExpanded: boolean = false;
  panelOpenState = false;
  id: number;
  foundAnnouncements: boolean = false;

  constructor(
    private auth:AuthService,
    private log:LogService,
    private mpesa:MpesaService,
    private user:UserService,
    private route:ActivatedRoute,
    ) { 

    
    }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => this.getUserMpesaLogs(params['id']))
    this.route.params.subscribe(params => this.getUserLogs(params['id']))
    this.id = this.route.snapshot.params['id']
    this.getAnnouncements();
    
    // this.currentUser = this.tokenStorage.getUser();
  }
  setView(view: CalendarView){
    this.view = view;
  }


  getAnnouncements(){
    this.user.getLatestAnnouncements().subscribe({
      next: (data) => {
        this.announcements = data 
        console.warn(this.announcements)
        this.foundAnnouncements = true;
        // if(!this.announcements || this.announcements == undefined || this.announcements && this.announcements == 0){
        //   this.noAnnouncement = true;
        // } else {
        //   this.noAnnouncement = false;
        // }
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
        this.mpesa_logs = data
        console.warn('user_mpesa_logs:',data)
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
}
