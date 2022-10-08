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
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';
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
  selector: 'app-diesel-logs',
  templateUrl: './diesel-logs.component.html',
  styleUrls: ['./diesel-logs.component.css']
})
export class DieselLogsComponent implements OnInit {
  diesel_info: any;
  pumpsNo = 0;
  minimized: boolean = false;
  minimized2: boolean = false;
  minimized3: boolean = false;
  minimized4: boolean = false;


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
  pumpOne: Pump; 
  pumpTwo: Pump;
  pumpThree: Pump;
  pumpFour: Pump;
  currentRouter = this.router.url;
  showDiesel: boolean = false;

  today = new Date();

  pp = new FormControl('1');
  closed: boolean = true;
  closed2: boolean = true;
  closed3: boolean = true;
  closed4: boolean = true;
  diesel_received: any;
  diesel_received_info: any;
  pOneHidden: boolean;
  pTwoHidden: boolean;
  pThreeHidden: boolean;
  pFourHidden: boolean;
  

  constructor(
    private fuelService:FuelService, 
    private http:HttpClient,
    private notifService:NotificationService, 
    private logService:LogService, 
    private route:ActivatedRoute,
    private router:Router,
    private pumpService:PumpService,
    private mpesaService:LogMpesaService,
    ) { 
    this.fuelService.getDieselInfo().subscribe((data) => {
      this.info = data
      console.warn("data",data)
      this.pumpsNo = this.info.pumps;
      if (this.pumpsNo === 1){
        this.pOneHidden = false;
        this.pTwoHidden = true;
        this.pThreeHidden = true;
        this.pFourHidden = true;
      } else if (this.pumpsNo === 2){
        this.pOneHidden = false;
        this.pTwoHidden = false;
        this.pThreeHidden = true;
        this.pFourHidden = true;
      } else if (this.pumpsNo === 3){
        this.pOneHidden = false;
        this.pTwoHidden = false;
        this.pThreeHidden = false;
        this.pFourHidden = true;
      } else if (this.pumpsNo === 4){
        this.pOneHidden = false;
        this.pTwoHidden = false;
        this.pThreeHidden = false;
        this.pFourHidden = false;
      }

    });
    this.fuelService.getFuels().subscribe(
      (data) => {
        this.fuels = data;
      }
    )
    this.mpesaService.getTodayMpesaLogs().subscribe(
      (data) => {
        this.mpesa_logs = data;
      }
    )
    
    this.fuelService.getDieselInfo().subscribe((data) => {
      this.diesel_info = data
      console.warn("diesel info data:",data)
      // Notiflix.Notify.success("get diesel success!")
    },
    err => {
      // Notiflix.Notify.failure("get diesel failure!")
    }
    );
    this.fuelService.getDieselInfo().subscribe((data) => {
      this.diesel_info = data
      console.warn("diesel info data:",data)
      // Notiflix.Notify.success("get diesel success!")
    },
    err => {
      // Notiflix.Notify.failure("get diesel failure!")
    });
    this.fuelService.getDieselInfo().subscribe((data) => {
      this.diesel_info = data
      console.warn("diesel info data:",data)
      // Notiflix.Notify.success("get diesel success!")
    },
    err => {
      // Notiflix.Notify.failure("get diesel failure!")
    });

    // this.logService.getDieselLogs().subscribe((data) => {
    //   this.logs = data
    //   console.warn("today diesel logs",data)
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
      Notiflix.Notify.success('Diesel log added successful!');
      this.ngOnInit();
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
      Notiflix.Notify.warning('Please try again.');
    });
  }
 


  ngOnInit():void {
    this.route.params.subscribe(params => this.getDieselLogs(params['id']))
    
    toggleInitUpdateForm();
    this.selectDiesel();
    this.selectDiesel();
    this.selectDiesel();
    this.getDieselReceived();
    this.getDieselReceivedInfo();

    // this.getDieselLogs(
    //   this.route.snapshot.params['id']
    // );
    

    
  }
  selectDiesel(){
    this.showDiesel = true;
    this.showDiesel = false;
    this.showDiesel = false;
  }

 
  getDieselLogs(id:number): void{
    this.logService.getFuelLogs(id).subscribe(
      data => {
      this.logs = data
      // this.ngOnInit();
      console.warn('diesel_info_today:',data)
      
    },
    error => {
      console.log(error)
    });
  }

  goToDiv(){
    let x = document.querySelector("#logForm");
    if (x){
      x.scrollIntoView();
    }
  }

  addDiesel(){
    this.closed = true;
  }
  getDieselReceived(){
    this.fuelService.getDieselReceived(this.id).subscribe(
      (fuel_received_data) => {
        this.diesel_received = fuel_received_data;
        console.warn("fuel recvd data:",fuel_received_data);
        Notiflix.Notify.success('Get fuel rcv success!')
      },
      err => {
        console.warn(err)
        Notiflix.Notify.failure('Get fuel rcv failed!')
      }
    )
  }
  getDieselReceivedInfo(){
    this.fuelService.getDieselReceivedInfo(this.id).subscribe(
      (diesel_rcvd_info) => {
        this.diesel_received_info = diesel_rcvd_info
      },
      err => {
        console.log(err)
      }
    )
  }

  maximize(){
    if(this.minimized === true){
      this.minimized = false
    } else {
      this.minimized = true;
    }
  }
  maximize2(){
    if(this.minimized2 === true){
      this.minimized2 = false
    } else {
      this.minimized2 = true;
    }
  }
  maximize3(){
    if(this.minimized3 === true){
      this.minimized3 = false
    } else {
      this.minimized3 = true;
    }
  }
  maximize4(){
    if(this.minimized4 === true){
      this.minimized4 = false
    } else {
      this.minimized4 = true;
    }
  }
  close(){
    this.minimized = true;
  }
  close2(){
    this.minimized2 = true;
  }
  close3(){
    this.minimized3 = true;
  }
  close4(){
    this.minimized4 = true;
  }

}
