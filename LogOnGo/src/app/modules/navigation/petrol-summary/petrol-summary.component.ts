import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from '../../fuel/services/fuel.service';

@Component({
  selector: 'app-petrol-summary',
  templateUrl: './petrol-summary.component.html',
  styleUrls: ['./petrol-summary.component.css']
})
export class PetrolSummaryComponent implements OnInit {
  fuelSummary: any;
  open: boolean = false;
  ppOpen: boolean = false; 
  initOpen: boolean = false;
  id: number;

  constructor(
    private fuelService:FuelService,
  ) { }


  ngOnInit(): void {
    
    
    this.getPetrol();
  }
  getPetrol(){
    this.fuelService.getPetrolInfo().subscribe({
      next: (res) => {
        this.id = res.id
        this.fuelService.getFuelSummary(this.id).subscribe(
          (data) => {
            this.fuelSummary = data;
            console.warn("petrol summary",this.fuelSummary)
          }
        )
      }
    });
  }
  updatePetrol(petrolData){
    this.fuelService.getPetrolInfo().subscribe({
      next: (res) => {
        this.id = res.id;
        this.fuelService.updateFuelInfo(this.id,petrolData).subscribe({
          next: (res) => {
            console.log(res);
            Notiflix.Notify.success('updated!');
            this.open = false;
            this.ppOpen = false;
            this.initOpen = false;
          }
        }
      );
      }
    })
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

