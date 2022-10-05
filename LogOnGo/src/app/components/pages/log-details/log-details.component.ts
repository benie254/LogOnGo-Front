import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { Log } from 'src/app/classes/log/log';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-log-details',
  templateUrl: './log-details.component.html',
  styleUrls: ['./log-details.component.css']
})
export class LogDetailsComponent implements OnInit {
  updateConfirmed: boolean = false;
  closed: boolean = false;
  fuelName= '';
  @Input() viewMode = false;
  @Input() logDetails: Log = {
    // id: 0,
    date: '',
    eod_reading_lts: 0,
    eod_reading_yesterday: 0,
    total_litres_sold: 0,
    amount_earned_today: 0,
    fuel: 0,
    fuel_name: '',
    pump: 0,
    pump_name: '',
    logged_by: '',
    user_id: 0,
    balance: 0,
    balance_yesterday: 0,
    updated_balance: 0,
    first_logged: '',
    last_edited: ''
  };
  message = '';
  logs: Log;
  id: number;
  yesterday_logs: any;
  petrol_received_info: any;
  form: FormGroup;
  fuels:Fuel;
  currentUser = this.authService.currentUserValue;
  diesel_received: any;
  gas_received: any;
  petrol_received: any;
  diesel_received_info: any;
  gas_received_info: any;
  hideDiesel: boolean = false;
  hidePetrol: boolean = false;
  hideGas: boolean = false;
  

  constructor(
    private route:ActivatedRoute, 
    private logService:LogService,
    private authService:AuthService,
    private fuelService:FuelService,
    ) {
      this.fuelService.getDieselReceivedInfo(this.id).subscribe(
        (diesel_rcvd_info) => {
          this.diesel_received_info = diesel_rcvd_info
        },
        err => {
          console.log(err)
        }
      )
      this.fuelService.getPetrolReceivedInfo(this.id).subscribe(
        (diesel_rcvd_info) => {
          this.diesel_received_info = diesel_rcvd_info
        },
        err => {
          console.log(err)
        }
      )
      this.fuelService.getGasReceivedInfo(this.id).subscribe(
        (gas_rcvd_info) => {
          this.gas_received_info = gas_rcvd_info;
        },
        err => {
          console.log(err)
        }
      )
     }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getLogDetails(params['id']))
    this.id = this.route.snapshot.params['id'];
    // this.route.params.subscribe(params => this.updateLogDetails(params['id']))
    this.message = '';

    this.dieselReceived();
    this.getGasReceived();
    this.getPetrolReceived();
    this.getPetrolReceivedInfo();

    this.fuelService.getFuels().subscribe(
      (fuels_data) => {
        console.warn("fuels data:",fuels_data)
        this.fuels = fuels_data;
        Notiflix.Notify.success('Get fuel success')
      },
      err => {
        console.warn(err)
        Notiflix.Notify.failure('Fuel get failed')
      }
    )

    this.form = new FormGroup({
      date: new FormControl('', [Validators.required]),
      eod_reading_lts: new FormControl(0, Validators.required),
      // eod_reading_yesterday: new FormControl(0, [Validators.required]),
      // total_litres_sold: new FormControl(0, [Validators.required]),
      // amount_earned_today: new FormControl(0, [Validators.required]),
      // fuel: new FormControl(0, [Validators.required]),
      // fuel_name: new FormControl('', [Validators.required]),
      // logged_by: new FormControl('', [Validators.required]),
      // user_id: new FormControl(0, [Validators.required]),
    });
  }
  

  getLogDetails(id:number){
    this.logService.getLogDetails(id).subscribe((data) => {
      this.logs = data
      console.warn("log details",data)
      Notiflix.Notify.success('Get success')
      this.fuelName = this.logs.fuel_name
      
      if (this.fuelName === 'Petrol'){
        this.hideDiesel = true;
        this.hideGas = true;
      } else if (this.fuelName === 'Diesel'){
        this.hidePetrol = true;
        this.hideGas = true;
      } else if (this.fuelName === 'Gas'){
        this.hideDiesel = true;
        this.hidePetrol = true;
      } 
    },
    err => {
      console.warn(err)
      Notiflix.Notify.failure('Something went wrong!')
    }
    );
  }
  // updatePosted(status){
  //   const data = {
  //     date: this.logs.date,
  //     fuel: this.logs.fuel,
  //     fuel_name: this.logs.fuel_name, 
  //     eod_reading_lts: this.logs.eod_reading_lts, 
  //     eod_reading_yesterday: this.logs.eod_reading_yesterday, 
  //     total_litres_sold: this.logs.total_litres_sold, 
  //     amount_earned_today: this.logs.amount_earned_today, 
  //     balance: this.logs.balance, 
  //     updated_balance:this.logs.updated_balance, 
  //     balance_yesterday: this.logs.balance_yesterday, 
  //     user_id: this.logs.user_id, 
  //     logged_by: this.logs.logged_by, 
  //   };
  //   this.logService.updateLogDetails(this.logs.id, data).subscribe(
  //     response => {
  //       console.log(response);
  //       Notiflix.Notify.success('Updated!')
  //     },
  //     error => {
  //       console.log(error)
  //       alert(error)
  //       Notiflix.Notify.failure('Update failed!')
  //     }
  //   );
  // }

  get f(){
    return this.form.controls;
  }

  updateLogDetails(){
    this.message = '';

    this.logService.updateLogDetails(this.id,this.form.value).subscribe({
        next: (res) => {
          console.log(res);
          Notiflix.Notify.success('updated!');
          // this.message = res.message ? res.message : 'This tutorial was updated successfully!';
          this.closed = true;
        },
        error: (e) => {
          console.error(e)
          Notiflix.Notify.failure('Update failed!')
          this.closed = false;
        } 
      });
  }

  reportWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to edit this log?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.info(
          "Remember",
          "We keep records of all updates.",
          "Okay",
        )
        this.updateConfirmed = true;
        this.closed = false;
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "",
          'Great',
        )
        this.updateConfirmed = false;
      }
    )
  }

  toggleUpdateForm(){
    this.closed = true;
  }

  dieselReceived() {
    this.fuelService.getDieselReceived(this.id).subscribe(
      (result) => {
        this.diesel_received = result;
      console.warn('result', result);
      // this.notifService.submitSuccess('success','Diesel received added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    },
    err => {
      
    }
    );
  }
  

  

  getPetrolReceived(){
    this.fuelService.getPetrolReceived(this.id).subscribe(
      (fuel_received_data) => {
        this.petrol_received = fuel_received_data;
        console.warn("fuel recvd data:",fuel_received_data);
        Notiflix.Notify.success('Get fuel rcv success!')
      },
      err => {
        this.message = err 
        console.warn(err)
        Notiflix.Notify.failure('Get fuel rcv failed!')
      }
    )
  }
  getGasReceived(){
    this.fuelService.getGasReceived(this.id).subscribe(
      (gas_received_data) => {
        this.gas_received = gas_received_data;
        console.warn("gas recvd data:",gas_received_data);
        Notiflix.Notify.success('Get gas rcv success!')
      },
      err => {
        this.message = err 
        console.warn(err)
        Notiflix.Notify.failure('Get gas rcv failed!')
      }
    )
  }
  getPetrolReceivedInfo(){
    this.fuelService.getPetrolReceivedInfo(this.id).subscribe(
      (petrol_rcvd_info) => {
        this.petrol_received_info = petrol_rcvd_info
      },
      err => {
        console.log(err)
      }
    )
  }

}
