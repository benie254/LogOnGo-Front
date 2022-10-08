import { Component, OnInit } from '@angular/core';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-add-log',
  templateUrl: './add-log.component.html',
  styleUrls: ['./add-log.component.css']
})
export class AddLogComponent implements OnInit {
  user: any;
  fuel: any;
  fuel_data: any;

  constructor(
    private fuelService:FuelService, 
    private logService:LogService
    ) { 
    this.fuelService.getPetrolInfo().subscribe((fuel_data) => {
      this.fuel.id = fuel_data
      console.warn("data",fuel_data)
    });

    
  }

  addLog(log_info: any) {
    console.warn(log_info);
    this.logService.addLog(log_info).subscribe((result) => {
      console.warn('result', result);
      // this.notifService.submitSuccess('success','Log added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    });
  }

  ngOnInit(): void {
  }

}
