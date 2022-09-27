import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from 'src/app/services/fuel/fuel.service';

@Component({
  selector: 'app-petrol-received',
  templateUrl: './petrol-received.component.html',
  styleUrls: ['./petrol-received.component.css']
})
export class PetrolReceivedComponent implements OnInit {
  petrol_received: any;
  petrolInfo: any;

  constructor(
    private fuelService:FuelService,
  ) { 
    this.fuelService.getPetrolInfo().subscribe(
      (data) => {
        this.petrolInfo = data;
      }
    )
  }

  petrolReceived(petrol_received: any) {
    console.warn(petrol_received);
    this.fuelService.addFuelReceived(petrol_received).subscribe((result) => {
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

}
