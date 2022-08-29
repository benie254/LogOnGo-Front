import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-pumps-update-form',
  templateUrl: './pumps-update-form.component.html',
  styleUrls: ['./pumps-update-form.component.css']
})
export class PumpsUpdateFormComponent implements OnInit {
  petrol_details: any;

  constructor(private fuelService:FuelService, private notifService:NotificationService) {
    this.fuelService.getPetrolInfo().subscribe((data) => {
      this.petrol_details = data
      console.warn("data",data)
    });
   }

  updatePetrolPumps(petrol_info:any){
    console.warn(petrol_info);
    this.fuelService.updatePetrolInfo(petrol_info).subscribe((result) => {
      console.warn('updated result',result);
      this.notifService.submitSuccess('success','Petrol pumps updated successfully!')
    })
  }

  ngOnInit(): void {
  }

}
