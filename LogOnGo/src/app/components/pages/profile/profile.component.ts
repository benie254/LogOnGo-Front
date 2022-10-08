import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import * as Notiflix from 'notiflix';
import { Announcement } from 'src/app/classes/announcement/announcement';
import { Log } from 'src/app/classes/log/log';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';
import { LogService } from 'src/app/services/log/log.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { TokenStorageService } from 'src/app/services/token/token-storage.service';

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
  user_logs: Log; 
  announcements: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [2, 5, 10, 15];
  currentUser = this.authService.currentUserValue;
  logs: Log = {
    id: 0,
    date: '',
    eod_reading_lts: 0.00,
    eod_reading_yesterday: 0.00,
    total_litres_sold: 0.00,
    amount_earned_today: 0,
    fuel: 0,
    fuel_name: '',
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
  mpesaForm: FormGroup;
  isExpanded: boolean = false;
  panelOpenState = false;
  id: number;
  noAnnouncement: boolean;

  constructor(
    private authService:AuthService,
    private profileService:ProfileService,
    private logService:LogService,
    private fuelService:FuelService,
    private logMpesaService:LogMpesaService,
    private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    ) { 

      this.fuelService.getPetrolInfo().subscribe((data) => {
        this.info = data
        console.warn("data",data)
      });
    }

  ngOnInit(): void {
    this.getUserAnnouncements();
    this.route.params.subscribe(params => this.getUserMpesaLogs(params['id']))
    this.id = this.route.snapshot.params['id']
    this.getUserLogs();
    this.mpesaForm = this.formBuilder.group({
      date: ['',Validators['date']],
      transaction_number: ['',Validators['required']],
      customer_name: ['',Validators['required']],
      customer_phone_number: [0,Validators['required']],
      amount: [0,Validators['required']],
      amount_transferred_to_bank: 0,
      user: 0,
      logged_by: ''
    });
    // this.currentUser = this.tokenStorage.getUser();
  }
  setView(view: CalendarView){
    this.view = view;
  }


  getUserAnnouncements(){
    this.profileService.getAnnouncements().subscribe((data) => {
      this.announcements = data 
      console.warn(this.announcements)
      if(this.announcements == undefined || this.announcements && this.announcements == 0){
        this.noAnnouncement = true;
      } else {
        this.noAnnouncement = false;
      }
    })
  }

  get f() { return this.mpesaForm.controls; }

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

  addMpesaLog(mpesa_info: any) {
    this.logMpesaService.addMpesaLog(mpesa_info).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('Mpesa log added successful!');
      this.ngOnInit();
    }, 
    err => {
      Notiflix.Notify.failure('Something went wrong!');
      Notiflix.Notify.warning('Please try again.');
    });
  }

  getUserLogs(): void{
    this.logService.getUserLogs(this.id).subscribe(
      data => {
      this.user_logs = data
      console.warn('user_logs:',data)
    },
    error => {
      console.log(error)
      Notiflix.Notify.failure('Something went wrong!');
    });
  }

  getUserMpesaLogs(id:number): void{
    this.logMpesaService.getUserMpesaLogs(id).subscribe(
      (data) => {
      this.mpesa_logs = data
      // this.ngOnInit();
      console.warn('user_mpesa_logs:',data)
    },
    error => {
      console.log(error)
      Notiflix.Notify.failure('Something went wrong!');
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
  // onTableDataChange(event: any) {
  //   this.page = event;
  //   this.getUserLogs();
  // }
  // onTableSizeChange(event: any): void {
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  //   this.getUserLogs();
  // }

}
