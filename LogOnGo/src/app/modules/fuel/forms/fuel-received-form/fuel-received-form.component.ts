import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from '../../services/fuel/fuel.service';

@Component({
  selector: 'app-fuel-received-form',
  templateUrl: './fuel-received-form.component.html',
  styleUrls: ['./fuel-received-form.component.css']
})
export class FuelReceivedFormComponent implements OnInit {
  @Input() fuelInfo: any;
  @Input() fuelType: any; 
  @Input() fuelId: number;
  closed: boolean = true;
  @Input() logs: any;
  YYYY = new Date().getFullYear();
  MM = new Date().getMonth() + 1;
  DD = new Date().getDate();
  today = this.YYYY + '-' + this.MM + '-' + this.DD;

  constructor(
    private fuelService:FuelService, 
    ) {
      // this.fuelService.getFuelInfo().subscribe(
      //   (data) => {
      //     this.fuelInfo = data;
      //   }
      // )
     }


  ngOnInit(): void { }
  fuelReceived(fuelData) {
    Notiflix.Loading.dots('Processing...')
    this.fuelService.addFuelReceived(fuelData).subscribe({
      next: (result) => {
        Notiflix.Loading.remove();
        Notiflix.Notify.success('Add success!');
      }
    })
  }
  openFuelForm(){
    this.closed = false;
  }
  closeFuelForm(){
    this.closed = true;
  }

}
