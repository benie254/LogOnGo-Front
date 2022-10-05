import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-gas-received-form',
  templateUrl: './gas-received-form.component.html',
  styleUrls: ['./gas-received-form.component.css']
})
export class GasReceivedFormComponent implements OnInit {
  gasInfo: any;

  constructor(
    private fuelService:FuelService, 
    private notifService:NotificationService, 
    private logService:LogService
    ) { 
      this.fuelService.getDieselInfo().subscribe(
        (data) => {
          this.gasInfo = data;
        }
      )
    }

  gasReceived(gas_received: any) {
    console.warn(gas_received);
    Notiflix.Loading.dots('Processing...')
    this.fuelService.addFuelReceived(gas_received).subscribe((result) => {
      console.warn('result', result);
      // this.notifService.submitSuccess('success','Diesel received added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
      Notiflix.Loading.remove();
      Notiflix.Notify.success('Add success!');
    },
    err => {
      Notiflix.Notify.failure('Add failed!');
      Notiflix.Loading.remove();
    }
    );
  }

  ngOnInit(): void {
  }

}
