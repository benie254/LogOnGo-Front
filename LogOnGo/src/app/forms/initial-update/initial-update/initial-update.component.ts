import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-initial-update',
  templateUrl: './initial-update.component.html',
  styleUrls: ['./initial-update.component.css']
})
export class InitialUpdateComponent implements OnInit{
  gas_details: any;

  constructor(private fuelService:FuelService, private notifService:NotificationService){
    
  }

  

  InitUpdateFormGroup = new FormGroup({
    fuelType: new FormControl(),
    pricePerLitre: new FormControl(),
    initialTankAmount: new FormControl(),
    pumps: new FormControl(),
  })

  ngOnInit(): void {
    
  }

}
