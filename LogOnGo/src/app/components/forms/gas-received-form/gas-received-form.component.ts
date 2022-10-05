import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  gasForm = this.fb.group({
    fuel:0,
    litres_received: [0, [Validators.required]],
    received_from: ['', [Validators.required]],
    date_received: [0, [Validators.required]]
 });

  constructor(
    private fuelService:FuelService, 
    private notifService:NotificationService, 
    private logService:LogService,
    private fb:FormBuilder,
    ) { 
      this.fuelService.getGasInfo().subscribe(
        (data) => {
          this.gasInfo = data;
        }
      )
    }

  gasReceived() {
    Notiflix.Loading.dots('Processing...')
    this.fuelService.addFuelReceived(this.gasForm.value).subscribe((result) => {
      console.warn('result', result);
      // this.notifService.submitSuccess('success','Diesel received added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
      Notiflix.Loading.remove();
      Notiflix.Notify.success('Add success!');
      location.reload()
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
