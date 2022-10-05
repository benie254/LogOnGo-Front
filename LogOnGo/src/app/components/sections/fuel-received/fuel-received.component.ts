import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import * as Notiflix from 'notiflix';
import { ActivatedRoute } from '@angular/router';

declare function toggleOrderInfo(): any;
declare function toggleDieselOrderInfo(): any;
declare function toggleGasOrderInfo(): any;
declare function togglePetrolRcvd(): any;
declare function toggleDieselRcvd(): any;
declare function toggleGasRcvd(): any;

@Component({
  selector: 'app-fuel-received',
  templateUrl: './fuel-received.component.html',
  styleUrls: ['./fuel-received.component.css']
})
export class FuelReceivedComponent implements OnInit {

  petrol_received: any;
  diesel_received: any; 
  diesel_received_info: any; 
  gas_received: any;
  gas_received_info: any;
  fuels: any;
  message: '';
  petrol_info: any; 
  gasInfo: any; 
  dieselInfo: any;
  petrol_received_info: any;
  id: number;

  constructor(
    private fuelService:FuelService,
    private route:ActivatedRoute,
  ) {
    this.fuelService.getFuels().subscribe(
      (fuels_data) => {
        this.fuels = fuels_data;
        console.warn("fuels data:",fuels_data);
        Notiflix.Notify.success('Get fuels data success')
      },
      err => {
        Notiflix.Notify.failure('Get fuels data failed!')
        console.warn(err)
        this.message = err
      }
    )

    

    

    // this.fuelService.getDieselReceived().subscribe(
    //   (diesel_received_data) => {
    //     this.diesel_received = diesel_received_data;
    //     console.warn("diesel recvd data:",diesel_received_data);
    //     Notiflix.Notify.success('Get diesel rcv success!')
    //   },
    //   err => {
    //     this.message = err 
    //     console.warn(err)
    //     Notiflix.Notify.failure('Get diesel rcv failed!')
    //   }
    // )

    this.fuelService.getDieselReceivedInfo().subscribe(
      (diesel_rcvd_info) => {
        this.diesel_received_info = diesel_rcvd_info
      },
      err => {
        console.log(err)
      }
    )

    

    this.fuelService.getGasReceivedInfo().subscribe(
      (gas_rcvd_info) => {
        this.gas_received_info = gas_rcvd_info;
      },
      err => {
        console.log(err)
      }
    )

    this.fuelService.getPetrolInfo().subscribe(
      (petrol_info_data) => {
        this.petrol_info = petrol_info_data; 
      }
    )
    this.fuelService.getDieselInfo().subscribe(
      (diesel_info_data) => {
        this.dieselInfo = diesel_info_data; 
      }
    )
    this.fuelService.getGasInfo().subscribe(
      (gas_info_data) => {
        this.gasInfo = gas_info_data; 
      }
    )

    
   }



  fuelReceived(fuel_received: any) {
    console.warn(fuel_received);
    this.fuelService.addFuelReceived(fuel_received).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('Added successfully')
      location.reload()
      // this.notifService.submitSuccess('success','Petrol received added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    },
    err => {
      Notiflix.Notify.failure('Add failed!')
    }
    );
  }

  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.dieselReceived();
    this.getGasReceived();
    this.getPetrolReceived();
    this.getPetrolReceivedInfo();
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
