import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { Log } from 'src/app/classes/log/log';
import { Pump } from 'src/app/classes/pump/pump';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { PumpService } from 'src/app/services/pump/pump.service';


declare function togglePLogs(): any;
declare function secondAlert(): any;
declare function myTotal(): any;
declare function myAlert(): any; 
declare function myTester(): any;
declare function amountToday(): any;
declare function getBal(): any;
declare function getBalHome(): any;
declare function myPumps(): any;
declare function toggleInitUpdateForm(): any;
declare var angular: any;

declare function togglePumpOne(): any; 
declare function togglePumpTwo(): any; 
declare function togglePumpThree(): any; 
declare function togglePumpFour(): any; 


@Component({
  selector: 'app-petrol-logs',
  templateUrl: './petrol-logs.component.html',
  styleUrls: ['./petrol-logs.component.css']
})
export class PetrolLogsComponent implements OnInit {

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
  fuels: Fuel;
  info: Fuel;
  myAlert: any; 
  logs_two: Log;
  logs_three: Log;
  logs_four: Log;
  mpesa: LogMpesa;
  id: number;
  mpesa_logs: LogMpesa;
  yesterday_logs: Log;
  pumpOne: Pump; 
  pumpTwo: Pump;
  pumpThree: Pump;
  pumpFour: Pump;
  currentRouter = this.router.url;

  today = new Date();

  pp = new FormControl('1');
  

  constructor(
    private fuelService:FuelService, 
    private http:HttpClient,
    private notifService:NotificationService, 
    private logService:LogService, 
    private route:ActivatedRoute,
    private router:Router,
    private pumpService:PumpService,
    ) { 
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.info = data
      console.warn("data",data)
    });
    

    this.logService.getYesterdayLogs().subscribe((data) => {
      this.yesterday_logs = data
      console.warn("data",data);
    });

    // this.logService.getPetrolLogs().subscribe((data) => {
    //   this.logs = data
    //   console.warn("today petrol logs",data)
    // });
    
  }

  toggleInfo(event:any){
    return alert('Hello!')
  }

  addFuelInfo(fuel_info: any) {
    console.warn(fuel_info);
    this.fuelService.addFuel(fuel_info).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('Fuel info added successful!');
    }, 
    err => {
      Notiflix.Notify.failure('Something went wrong!');
      Notiflix.Notify.warning('Please try again.');
    });
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


  updatePetrolInfo(petrol_info:any){
    console.warn(petrol_info);
    this.fuelService.updatePetrolInfo(petrol_info).subscribe((result) => {
      console.warn('updated result',result);
      Notiflix.Notify.success('Petrol info updated successful!');
    }, 
    err => {
      Notiflix.Notify.failure('Something went wrong!');
      Notiflix.Notify.warning('Please try again.');
    });
  }
  updateDieselInfo(diesel_info:any){
    console.warn(diesel_info);
    this.fuelService.updateDieselInfo(diesel_info).subscribe((result) => {
      console.warn('updated result',result);
      Notiflix.Notify.success('Diesel info updated successful!');
    }, 
    err => {
      Notiflix.Notify.failure('Something went wrong!');
      Notiflix.Notify.warning('Please try again.');
    });
  }
  updateGasInfo(gas_info:any){
    console.warn(gas_info);
    this.fuelService.updateGasInfo(gas_info).subscribe((result) => {
      console.warn('updated result',result);
      Notiflix.Notify.success('Gas info updated successful!');
    }, 
    err => {
      Notiflix.Notify.failure('Something went wrong!');
      Notiflix.Notify.warning('Please try again.');
    });
  }

  ngOnInit():void {
    this.route.params.subscribe(params => this.getPetrolLogs(params['id']))
    
    toggleInitUpdateForm();

    // this.getPetrolLogs(
    //   this.route.snapshot.params['id']
    // );
    

    
  }
  getPetrolLogs(id:number): void{
    this.logService.getFuelLogs(id).subscribe(
      data => {
      this.logs = data
      // this.ngOnInit();
      console.warn('petrol_info_today:',data)
      Notiflix.Notify.success('Get success!');
      
    },
    error => {
      console.log(error)
      Notiflix.Notify.failure('Something went wrong!');
    });
  }

  goToDiv(){
    let x = document.querySelector("#logForm");
    if (x){
      x.scrollIntoView();
    }
  }

}
