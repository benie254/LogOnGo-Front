import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from 'src/app/services/fuel/fuel.service';

@Component({
  selector: 'app-gas-summary',
  templateUrl: './gas-summary.component.html',
  styleUrls: ['./gas-summary.component.css']
})
export class GasSummaryComponent implements OnInit {
  gasSummary: any;
  open: boolean = false;
  ppOpen: boolean = false; 
  initOpen: boolean = false;

  constructor(
    private fuelService:FuelService,
  ) {
    this.fuelService.getGasSummary().subscribe(
      (data) => {
        this.gasSummary = data;
      }
    )
   }


  ngOnInit(): void {
  }
  updateGas(gasData){
    this.fuelService.updateGasInfo(gasData).subscribe({
        next: (res) => {
          console.log(res);
          Notiflix.Notify.success('updated!');
          this.open = false;
          this.ppOpen = false;
          this.initOpen = false;
          // this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => {
          console.error(e)
          Notiflix.Notify.failure('Update failed!')
          this.open = false;
          this.ppOpen = false;
          this.initOpen = false;
        } 
      });
  }
  togglePumpsForm(){
    this.open = true;
  }
  closePumpForm(){
    this.open = false;
  }
  togglePPform(){
    this.ppOpen = true;
  }
  closePPform(){
    this.ppOpen = false;
  }
  toggleInitForm(){
    this.initOpen = true;
  }
  closeInitForm(){
    this.initOpen = false;
  }

}
