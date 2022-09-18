import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-gas-received-form',
  templateUrl: './gas-received-form.component.html',
  styleUrls: ['./gas-received-form.component.css']
})
export class GasReceivedFormComponent implements OnInit {

  constructor(private fuelService:FuelService, private notifService:NotificationService, private logService:LogService) { }

  gasReceived(gas_received: any) {
    console.warn(gas_received);
    this.fuelService.addGasReceived(gas_received).subscribe((result) => {
      console.warn('result', result);
      // this.notifService.submitSuccess('success','Gas received added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    });
  }

  ngOnInit(): void {
  }

}
