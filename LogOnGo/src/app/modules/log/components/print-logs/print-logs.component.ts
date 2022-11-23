import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Log } from 'src/app/classes/log/log';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-print-logs',
  templateUrl: './print-logs.component.html',
  styleUrls: ['./print-logs.component.css']
})
export class PrintLogsComponent implements OnInit {
  petrol_info: any; 
  yesterday_petrol_logs: any;
  log_details: Log; 
  petrol_received: any;
  logs: Log;
  fuelName= '';
  diesel_received: any;
  gas_received: any;
  petrol_received_info: any;
  diesel_received_info: any;
  gas_received_info: any;
  hideDiesel: boolean = false;
  hidePetrol: boolean = false;
  hideGas: boolean = false;
  id: number;
  fuels: any;


  constructor(
    private route:ActivatedRoute,
    private logService:LogService,
    private fuelService:FuelService,
  ) { 
    this.fuelService.getFuels().subscribe(
      (fuels_data) => {
        console.warn("fuels data:",fuels_data)
        this.fuels = fuels_data;
      },
      err => {
        console.warn(err)
      }
    )
    this.fuelService.getDieselReceivedInfo(this.id).subscribe(
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
    this.dieselReceived();
    this.getPetrolReceived();
    this.getGasReceived();
    this.getPetrolReceivedInfo();
  }

  getLogDetails(id:number){
    this.logService.getLogDetails(id).subscribe((data) => {
      this.log_details = data
      console.warn("log details",data)
      this.fuelName = this.log_details.fuel_name
      
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
    }
    );
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
      },
      err => {
        console.warn(err)
      }
    )
  }
  getPetrolReceivedInfo(){
    this.fuelService.getPetrolReceivedInfo(this.id).subscribe(
      (petrol_rcvd_info) => {
        this.petrol_received_info = petrol_rcvd_info
      },
      err => {
        console.log(err);
      }
    )
  }
  getGasReceived(){
    this.fuelService.getGasReceived(this.id).subscribe(
      (gas_received_data) => {
        this.gas_received = gas_received_data;
        console.warn("gas recvd data:",gas_received_data);
      },
      err => {
        console.warn(err)
      }
    )
  }
  // getPetrolReceivedInfo(){
  //   this.fuelService.getPetrolReceivedInfo(this.id).subscribe(
  //     (petrol_rcvd_info) => {
  //       this.petrol_received_info = petrol_rcvd_info
  //     },
  //     err => {
  //       console.log(err)
  //     }
  //   )
  // }

}
