import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css']
})
export class FuelComponent {
  fuelFormGroup = new FormGroup({
    fuelType: new FormControl('Petrol'),
    pricePerLitre: new FormControl(160),
    initialTankAmount: new FormControl(6000),
    pumps: new FormControl(3),
  })

}
