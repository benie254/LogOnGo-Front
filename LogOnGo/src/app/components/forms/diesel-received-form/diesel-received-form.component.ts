import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-diesel-received-form',
  templateUrl: './diesel-received-form.component.html',
  styleUrls: ['./diesel-received-form.component.css']
})
export class DieselReceivedFormComponent implements OnInit {
  dieselInfo: any;
  closed: boolean = false;
  dieselForm = this.fb.group({
    fuel:0,
    litres_received: [0, [Validators.required]],
    received_from: ['', [Validators.required]],
    date_received: [0, [Validators.required]]
 });

  constructor(
    private fuelService:FuelService, 
    private fb:FormBuilder
    ) {
      this.fuelService.getDieselInfo().subscribe(
        (data) => {
          this.dieselInfo = data;
        }
      )
     }


  ngOnInit(): void { }
  dieselReceived() {
    Notiflix.Loading.dots('Processing...')
    this.fuelService.addFuelReceived(this.dieselForm.value).subscribe((result) => {
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
  openDieselForm(){
    this.closed = true;
  }
  closeDieselForm(){
    this.closed = false;
  }

}
