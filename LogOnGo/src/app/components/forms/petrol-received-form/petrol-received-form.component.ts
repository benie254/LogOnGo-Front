import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import * as Notiflix from 'notiflix';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-petrol-received-form',
  templateUrl: './petrol-received-form.component.html',
  styleUrls: ['./petrol-received-form.component.css']
})
export class PetrolReceivedFormComponent implements OnInit {
  petrolInfo: any;
  closed: boolean = false;
  
  constructor(
    private fuelService:FuelService, 
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
  openPetrolForm(){
    this.closed = true;
  }
  closePetrolForm(){
    this.closed = false;
  }


  addPetrolReceived(petrolData) {
    Notiflix.Loading.hourglass('Processing...');
    this.fuelService.addFuelReceived(petrolData).subscribe((result) => {
      console.warn('result', result);
      // this.notifService.submitSuccess('success','Petrol received added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
      Notiflix.Notify.success('Add success!');
      Notiflix.Loading.remove();
      location.reload()
    },
    err => {
      Notiflix.Notify.failure('Add failed!')
    }
    );
  }

}
