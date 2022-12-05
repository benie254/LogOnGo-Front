import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { FuelService } from '../../fuel/services/fuel/fuel.service';

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
  fuels: any;
  empty: boolean = true;
  petrol: any;
  noFuel: boolean = true;
  savedId: any;

  constructor(
    private fuelService:FuelService,
  ) { }

  ngOnInit(): void {
    this.getPetrol();
  }
  getPetrol(){
    Notiflix.Loading.dots('Loading content...')
    this.fuelService.getPetrolInfo().subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.petrol = res;
        this.id = res.id
        if(this.petrol.length && this.petrol.pp_litre == undefined || this.petrol.pp_litre == null || this.petrol.pp_litre == ''){
          this.noFuel = true;
        }else{
          this.noFuel = false;
          this.petrolSummary();
          this.copy(res.id);
        }
      }
    });
  }
  copy = (text: any): void => {
    localStorage.setItem('petrolSavedId',text);
    this.savedId = localStorage.getItem('petrolSavedId')
  }
  petrolSummary(){
    this.fuelService.getFuelSummary(this.id).subscribe(
      (data) => {
        this.fuelSummary = data;
        console.warn("sum:",data)
        if(!this.fuelSummary || this.fuelSummary.length && this.fuelSummary.cumulative_litres_td == undefined || this.fuelSummary.cumulative_litres_td == null || this.fuelSummary.cumulative_litres_td == ''){
          this.empty = true;
        } else {
          this.empty = false;
        }
      }
    )
  }
  updatePetrol(petrolData: Fuel){
    this.fuelService.updateFuelInfo(this.savedId,petrolData).subscribe({
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

