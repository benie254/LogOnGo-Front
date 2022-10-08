import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';

@Component({
  selector: 'app-priceperlitre-update-form',
  templateUrl: './priceperlitre-update-form.component.html',
  styleUrls: ['./priceperlitre-update-form.component.css']
})
export class PriceperlitreUpdateFormComponent implements OnInit {
  petrol_details: any; 

  constructor(
    private fuelService:FuelService, 
    ) {
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.petrol_details = data
      console.warn("data",data)
    });
   }

  updatePetrolInfo(petrol_info:any){
    console.warn(petrol_info);
    this.fuelService.updatePetrolInfo(petrol_info).subscribe((result) => {
      console.warn('updated result',result);
      // this.notifService.submitSuccess('success','Petrol info updated successfully!')
    })
  }

  ngOnInit(): void {
  }

}
