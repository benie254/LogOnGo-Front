import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { FuelService } from '../../fuel/services/fuel/fuel.service';

@Component({
  selector: 'app-gas-summary',
  templateUrl: './gas-summary.component.html',
  styleUrls: ['./gas-summary.component.css']
})
export class GasSummaryComponent implements OnInit {
  fuelSummary: any;
  open: boolean = false;
  ppOpen: boolean = false; 
  initOpen: boolean = false;
  id: number;
  empty: boolean;
  gas: any;

  constructor(
    private fuelService:FuelService,
  ) { }


  ngOnInit(): void {
    
    
    this.getGas();
  }
  getGas(){
    this.fuelService.getGasInfo().subscribe({
      next: (res) => {
        this.gas = res;
        this.id = res.id
        this.fuelService.getFuelSummary(this.id).subscribe(
          (data) => {
            this.fuelSummary = data;
            if(this.fuelSummary.cumulative_litres_sold_today == null || this.fuelSummary == '' || this.fuelSummary.length == undefined){
              this.empty = true;
            } else {
              this.empty = false;
            }
          }
        )
      }
    });
  }
  updateGas(gasData){
    this.fuelService.getGasInfo().subscribe({
      next: (res) => {
        this.id = res.id;
        this.fuelService.updateFuelInfo(this.id,gasData).subscribe({
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

