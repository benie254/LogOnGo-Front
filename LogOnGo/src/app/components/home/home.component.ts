import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { Log } from 'src/app/classes/log/log';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ProfileService } from 'src/app/services/profile/profile.service';


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


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logs: any;
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

  today = new Date();

  pp = new FormControl('1');
  

  constructor(private fuelService:FuelService, private http:HttpClient,private notifService:NotificationService, private logService:LogService, private route:ActivatedRoute) { 
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
    this.logService.getPetrolLogs2().subscribe((data) => {
      this.logs_two = data
      console.warn("data",data)
    });
    this.logService.getPetrolLogs3().subscribe((data) => {
      this.logs_three = data
      console.warn("data",data)
    });
    this.logService.getPetrolLogs4().subscribe((data) => {
      this.logs_four = data
      console.warn("data",data)
    });
    this.logService.getMpesaLogs().subscribe((data) => {
      this.mpesa = data
      console.warn("data",data)
    });
    
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
      Notiflix.Notify.success('Fuel info added successful!');
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
    secondAlert();
    myAlert();
    myTester();
    myTotal();
    amountToday();
    getBal();
    getBalHome();
    myPumps();
    toggleInitUpdateForm();

    this.route.params.subscribe(
      params => this.getPetrolLogs(params['id'])
    );
    

    
  }
  getPetrolLogs(id:number){
    this.logService.getPetrolLogs(id).subscribe((data:Log) => {
      this.logs = data
      console.warn('petrol_info_today:',data)
    });
  }
  


}
