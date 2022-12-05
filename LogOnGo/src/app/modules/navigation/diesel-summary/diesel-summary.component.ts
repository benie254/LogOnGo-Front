import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from '../../fuel/services/fuel/fuel.service';

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
  empty: boolean = true;
  fuel: any;
  noFuel: boolean = true;

  constructor(
    private fuelService:FuelService,
  ) { }


  ngOnInit(): void {
    
    
    this.getDiesel();
  }
  getDiesel(){
    Notiflix.Loading.dots('Loading content...')
    this.fuelService.getDieselInfo().subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.fuel = res;
        this.id = res.id
        if(!this.fuel || this.fuel.length || this.fuel.pp_litre == undefined || this.fuel.pp_litre == null || this.fuel.pp_litre == ''){
          this.noFuel = true;
        }else{
          this.noFuel = false;
          this.dieselSummary();
        }
      }
    });
  }
  dieselSummary(){
    this.fuelService.getFuelSummary(this.id).subscribe(
      (data) => {
        this.fuelSummary = data;
        console.warn("fs",data)
        if(this.fuelSummary == 204 || !this.fuelSummary || this.fuelSummary.length && this.fuelSummary.cumulative_litres_td == undefined || this.fuelSummary.cumulative_litres_td == null || this.fuelSummary.cumulative_litres_td == ''){
          this.empty = true;
        } else {
          this.empty = false;
        }
      }
    )
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

