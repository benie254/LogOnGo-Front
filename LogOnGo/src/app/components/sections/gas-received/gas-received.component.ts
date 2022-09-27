import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from 'src/app/services/fuel/fuel.service';

@Component({
  selector: 'app-gas-received',
  templateUrl: './gas-received.component.html',
  styleUrls: ['./gas-received.component.css']
})
export class GasReceivedComponent implements OnInit {
  gas_received: any;
  gasInfo: any;

  constructor(
    private fuelService:FuelService,
  ) { 
    this.fuelService.getGasInfo().subscribe(
      (data) => {
        this.gasInfo = data;
      }
    )
  }

  gasReceived(gas_received: any) {
    console.warn(gas_received);
    this.fuelService.addFuelReceived(gas_received).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('Added successfully')
      // this.notifService.submitSuccess('success','Gas received added successfully!')
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
