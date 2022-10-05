import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-petrol-received-form',
  templateUrl: './petrol-received-form.component.html',
  styleUrls: ['./petrol-received-form.component.css']
})
export class PetrolReceivedFormComponent implements OnInit {
  petrolInfo: any;

  constructor(
    private fuelService:FuelService, 
    private notifService:NotificationService, 
    private logService:LogService
    ) { 
      this.fuelService.getPetrolInfo().subscribe(
        (data) => {
          this.petrolInfo = data;
        }
      )
    }

  petrolReceived(petrol_received: any) {
    Notiflix.Loading.hourglass('Processing...');
    console.warn(petrol_received);
    this.fuelService.addFuelReceived(petrol_received).subscribe((result) => {
      console.warn('result', result);
      // this.notifService.submitSuccess('success','Petrol received added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
      Notiflix.Notify.success('Add success!');
      Notiflix.Loading.remove();
    },
    err => {
      Notiflix.Notify.failure('Add failed!')
    }
    );
  }

  ngOnInit(): void {
  }

}
