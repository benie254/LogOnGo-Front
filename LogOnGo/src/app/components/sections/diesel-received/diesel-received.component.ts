import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from 'src/app/services/fuel/fuel.service';

@Component({
  selector: 'app-diesel-received',
  templateUrl: './diesel-received.component.html',
  styleUrls: ['./diesel-received.component.css']
})
export class DieselReceivedComponent implements OnInit {
  diesel_received: any;
  dieselInfo: any;

  constructor(
    private fuelService:FuelService,
  ) { 
    this.fuelService.getDieselInfo().subscribe(
      (data) => {
        this.dieselInfo = data;
      }
    )
  }

  dieselReceived(diesel_received: any) {
    console.warn(diesel_received);
    this.fuelService.addFuelReceived(diesel_received).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('Added successfully')
      // this.notifService.submitSuccess('success','Diesel received added successfully!')
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
