import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';

@Component({
  selector: 'app-gas-summary',
  templateUrl: './gas-summary.component.html',
  styleUrls: ['./gas-summary.component.css']
})
export class GasSummaryComponent implements OnInit {
  gasSummary: any;

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

}
