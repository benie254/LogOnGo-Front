import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';

@Component({
  selector: 'app-petrol-summary',
  templateUrl: './petrol-summary.component.html',
  styleUrls: ['./petrol-summary.component.css']
})
export class PetrolSummaryComponent implements OnInit {
  petrolSummary: any;

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

}
