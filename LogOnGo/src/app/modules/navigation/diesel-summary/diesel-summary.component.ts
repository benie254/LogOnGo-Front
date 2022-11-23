import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from '../../fuel/services/fuel.service';

@Component({
  selector: 'app-diesel-summary',
  templateUrl: './diesel-summary.component.html',
  styleUrls: ['./diesel-summary.component.css']
})
export class DieselSummaryComponent implements OnInit {
  fuelSummary: any;
  open: boolean = false;
  ppOpen: boolean = false; 
  initOpen: boolean = false;
  id: number;

  constructor(
    private fuelService:FuelService,
  ) { }


  ngOnInit(): void {
    
    
    this.getDiesel();
  }
  getDiesel(){
    this.fuelService.getDieselInfo().subscribe({
      next: (res) => {
        this.id = res.id
        this.fuelService.getFuelSummary(this.id).subscribe(
          (data) => {
            this.fuelSummary = data;
            console.warn("diesel summary",this.fuelSummary)
          }
        )
      }
    });
  }
  updateDiesel(dieselData){
    this.fuelService.getDieselInfo().subscribe({
      next: (res) => {
        this.id = res.id;
        this.fuelService.updateFuelInfo(this.id,dieselData).subscribe({
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

