import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';

@Component({
  selector: 'app-diesel-summary',
  templateUrl: './diesel-summary.component.html',
  styleUrls: ['./diesel-summary.component.css']
})
export class DieselSummaryComponent implements OnInit {
  dieselSummary: any;

  constructor(
    private fuelService:FuelService,
  ) {
    this.fuelService.getDieselSummary().subscribe(
      (data) => {
        this.dieselSummary = data;
      }
    )
   }


  ngOnInit(): void {
  }

}
