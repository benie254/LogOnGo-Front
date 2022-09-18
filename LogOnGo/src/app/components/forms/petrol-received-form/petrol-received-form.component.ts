import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-petrol-received-form',
  templateUrl: './petrol-received-form.component.html',
  styleUrls: ['./petrol-received-form.component.css']
})
export class PetrolReceivedFormComponent implements OnInit {

  constructor(private fuelService:FuelService, private notifService:NotificationService, private logService:LogService) { }

  petrolReceived(petrol_received: any) {
    console.warn(petrol_received);
    this.fuelService.addPetrolReceived(petrol_received).subscribe((result) => {
      console.warn('result', result);
      // this.notifService.submitSuccess('success','Petrol received added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    });
  }

  ngOnInit(): void {
  }

}
