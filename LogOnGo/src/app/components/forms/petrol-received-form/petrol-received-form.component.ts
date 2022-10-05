import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import * as Notiflix from 'notiflix';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-petrol-received-form',
  templateUrl: './petrol-received-form.component.html',
  styleUrls: ['./petrol-received-form.component.css']
})
export class PetrolReceivedFormComponent implements OnInit {
  petrolInfo: any;
  petrolForm = this.fb.group({
    fuel:0,
    litres_received: [0, [Validators.required]],
    received_from: ['', [Validators.required]],
    date_received: [0, [Validators.required]]
 });

  constructor(
    private fuelService:FuelService, 
    private notifService:NotificationService, 
    private logService:LogService,
    private fb: FormBuilder,
    ) { 
      this.fuelService.getPetrolInfo().subscribe(
        (data) => {
          this.petrolInfo = data;
          Notiflix.Notify.success('Get success-petrol info')
        }
      )
    } 
  
  ngOnInit(): void { }


  addPetrolReceived() {
    Notiflix.Loading.hourglass('Processing...');
    this.fuelService.addFuelReceived(this.petrolForm.value).subscribe((result) => {
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

}
