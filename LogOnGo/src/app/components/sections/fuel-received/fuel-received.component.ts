import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import * as Notiflix from 'notiflix';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fuel-received',
  templateUrl: './fuel-received.component.html',
  styleUrls: ['./fuel-received.component.css']
})
export class FuelReceivedComponent implements OnInit {

  petrol_received: any;
  fuels: any;
  message: '';
  petrol_info: any; 

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
        alert(this.message)
      }
    )

    this.fuelService.getPetrolReceived().subscribe(
      (fuel_received_data) => {
        this.petrol_received = fuel_received_data;
        console.warn("fuel recvd data:",fuel_received_data);
        Notiflix.Notify.success('Get fuel rcv success!')
      },
      err => {
        this.message = err 
        alert(this.message)
        console.warn(err)
        Notiflix.Notify.failure('Get fuel rcv failed!')
      }
    )

    this.fuelService.getPetrolInfo().subscribe(
      (petrol_info_data) => {
        this.petrol_info = petrol_info_data; 
      }
    )

    
   }



  fuelReceived(fuel_received: any) {
    console.warn(fuel_received);
    this.fuelService.addFuelReceived(fuel_received).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('Added successfully')
      // this.notifService.submitSuccess('success','Petrol received added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    },
    err => {
      Notiflix.Notify.failure('Add failed!')
    }
    );
  }

  

  ngOnInit(): void {
  }

  getPetrolReceived(){
    
    
  }

}
