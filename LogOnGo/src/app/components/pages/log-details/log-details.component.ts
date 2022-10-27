import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  message = '';
  logs: Log;
  id: number;
  yesterday_logs: any;
  petrol_received_info: any;
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
  delConfirmed: boolean = false;
  errMsg = '';
  errEOD = '';
  errDate = '';
  statusText = '';
  closedF: boolean = true;

  constructor(
    private route:ActivatedRoute, 
    private logService:LogService,
    private authService:AuthService,
    private fuelService:FuelService,
    private router:Router,
    ) {
      this.fuelService.getDieselReceivedInfo(this.id).subscribe({
        next: (diesel_rcvd_info) => {
          this.diesel_received_info = diesel_rcvd_info;
        }
      });
      this.fuelService.getPetrolReceivedInfo(this.id).subscribe({
        next: (petrol_rcvd_info) => {
          this.petrol_received_info = petrol_rcvd_info;
        }
      });
      this.fuelService.getGasReceivedInfo(this.id).subscribe({
        next: (gas_rcvd_info) => {
          this.gas_received_info = gas_rcvd_info;
        }
      });
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getLogDetails(params['id']))
    this.id = this.route.snapshot.params['id'];
    this.dieselReceived();
    this.getGasReceived();
    this.getPetrolReceived();
    this.getPetrolReceivedInfo();
    this.fuelService.getFuels().subscribe({
      next: (fuels_data) => {
        this.fuels = fuels_data;
      }
    });

    
  }
  openPetrolForm(){
    this.closedF = false;
  }
  closePetrolForm(){
    this.closedF = true;
  }
  getLogDetails(id:number){
    this.logService.getLogDetails(id).subscribe({
      next: (data) => {
        this.logs = data;
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
      }
    });
  }
  updateLogDetails(logData){
    this.logService.updateLogDetails(this.id,logData).subscribe({
        next: (res) => {
          console.log(res);
          Notiflix.Notify.success('updated!');
          // this.message = res.message ? res.message : 'This tutorial was updated successfully!';
          this.closed = true;
          this.errDate = '';
          this.errEOD = '';
          
        },
        error: (e) => {
          console.error(e)
          Notiflix.Notify.failure('Update failed!')
          this.closed = false;
          this.errMsg = e.error.detail;
          this.statusText = e.statusText;
          this.errEOD = e.error.eod_reading_lts;
          this.errDate = e.error.date;
          if(this.errMsg && this.statusText){
            Notiflix.Report.info(
              this.statusText,
              this.errMsg,
              "Okay",
            )
          } else if(this.statusText){
            Notiflix.Report.info(
              this.statusText,
              'Please fix the highlighted errors and try again.',
              "Okay",
            )
          }
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
  closeForm(){
    this.closed = true;
  }

  dieselReceived() {
    this.fuelService.getDieselReceived(this.id).subscribe({
      next: (result) => {
        this.diesel_received = result;
      }
    });
  }
  

  

  getPetrolReceived(){
    this.fuelService.getPetrolReceived(this.id).subscribe({
      next: (res) => {
        
      }, 
      error: (fuel_received_data) => {
        this.petrol_received = fuel_received_data;
      }
    });
  }
  getGasReceived(){
    this.fuelService.getGasReceived(this.id).subscribe({
      next: (gas_received_data) => {
        this.gas_received = gas_received_data;
      }
    });
  }
  getPetrolReceivedInfo(){
    this.fuelService.getPetrolReceivedInfo(this.id).subscribe({
      next: (petrol_rcvd_info) => {
        this.petrol_received_info = petrol_rcvd_info;
      }
    });
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm delete',
      "Are you sure you want to delete this log?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.warning(
          "Please note",
          "We will send this request to the administration.",
          "Okay",
        )
        this.delConfirmed = true;
        this.router.navigate(['/delete-log/' + this.id])
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "",
          'Great',
        )
        this.delConfirmed = false;
      }
    )
  }
  

}
