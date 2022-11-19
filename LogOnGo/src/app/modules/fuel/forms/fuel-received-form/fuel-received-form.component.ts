import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from '../../services/fuel.service';

@Component({
  selector: 'app-fuel-received-form',
  templateUrl: './fuel-received-form.component.html',
  styleUrls: ['./fuel-received-form.component.css']
})
export class FuelReceivedFormComponent implements OnInit {
  dieselInfo: any;
  closed: boolean = false;
 

  constructor(
    private fuelService:FuelService, 
    ) {
      // this.fuelService.getDieselInfo().subscribe(
      //   (data) => {
      //     this.dieselInfo = data;
      //   }
      // )
     }


  ngOnInit(): void { }
  dieselReceived() {
    Notiflix.Loading.dots('Processing...')
    // this.fuelService.addFuelReceived(this.dieselForm.value).subscribe((result) => {
    //   console.warn('result', result);
    //   // this.notifService.submitSuccess('success','Diesel received added successfully!')
    //   // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    //   Notiflix.Loading.remove();
    //   Notiflix.Notify.success('Add success!');
    //   location.reload()
    // },
    // err => {
    //   Notiflix.Notify.failure('Add failed!');
    //   Notiflix.Loading.remove();
    // }
    // );
  }
  openDieselForm(){
    this.closed = true;
  }
  closeDieselForm(){
    this.closed = false;
  }

}
