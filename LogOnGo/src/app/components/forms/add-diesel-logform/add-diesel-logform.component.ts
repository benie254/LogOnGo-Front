import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-add-diesel-logform',
  templateUrl: './add-diesel-logform.component.html',
  styleUrls: ['./add-diesel-logform.component.css']
})
export class AddDieselLogformComponent implements OnInit {

  constructor(private fuelService:FuelService, private notifService:NotificationService, private logService:LogService) { }

  addDieselLog(log_info: any) {
    console.warn(log_info);
    this.logService.addLog(log_info).subscribe((result) => {
      console.warn('result', result);
      this.notifService.submitSuccess('success','Diesel log added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    });
  }

  ngOnInit(): void {
  }

}
