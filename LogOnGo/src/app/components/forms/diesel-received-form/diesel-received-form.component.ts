import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-diesel-received-form',
  templateUrl: './diesel-received-form.component.html',
  styleUrls: ['./diesel-received-form.component.css']
})
export class DieselReceivedFormComponent implements OnInit {
  dieselInfo: any;
  dieselForm: FormGroup

  constructor(
    private fuelService:FuelService, 
    private notifService:NotificationService, 
    private logService:LogService,
    private formBuilder:FormBuilder
    ) {
      this.fuelService.getDieselInfo().subscribe(
        (data) => {
          this.dieselInfo = data;
        }
      )
     }


  ngOnInit(): void {
    this.dieselForm = new FormGroup({
      fuel: new FormControl(0),
      litres_received: new FormControl(0,Validators['required']),
      received_from: new FormControl('',Validators['required']),
      date_received: new FormControl('',Validators['required'],Validators['date']),
    });
    // this.dieselForm = this.formBuilder.group({
    //   fuel: 0,
    //   litres_received: [0,Validators['required']],
    //   received_from: ['',Validators['required']],
    //   date_received: ['',Validators['required'],Validators['date']],
    // });
  }
  get f(){
    return this.dieselForm.controls;
  }
  dieselReceived() {
    Notiflix.Loading.dots('Processing...')
    this.fuelService.addFuelReceived(this.dieselForm.value).subscribe((result) => {
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

}
