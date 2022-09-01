import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';

@Component({
  selector: 'app-initial-amount',
  templateUrl: './initial-amount.component.html',
  styleUrls: ['./initial-amount.component.css']
})
export class InitialAmountComponent implements OnInit {
  info: any;
  petrol_details: any;

  constructor(private fuelService:FuelService) {
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.info = data
      console.warn("petrol info:",data)
    });
   }

  ngOnInit(): void {
  }

}
