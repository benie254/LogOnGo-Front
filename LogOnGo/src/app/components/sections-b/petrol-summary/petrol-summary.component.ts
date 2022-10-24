import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from 'src/app/services/fuel/fuel.service';

@Component({
  selector: 'app-petrol-summary',
  templateUrl: './petrol-summary.component.html',
  styleUrls: ['./petrol-summary.component.css']
})
export class PetrolSummaryComponent implements OnInit {
  petrolSummary: any;
  open: boolean = false;
  ppOpen: boolean = false; 
  initOpen: boolean = false;

  constructor(
    private fuelService:FuelService,
  ) {
    this.fuelService.getPetrolSummary().subscribe(
      (data) => {
        this.petrolSummary = data;
      }
    )
   }

  ngOnInit(): void {
  }
  updatePetrol(petrolData){
    this.fuelService.updatePetrolInfo(petrolData).subscribe({
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
