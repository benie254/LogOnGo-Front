import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-add-gas-logform',
  templateUrl: './add-gas-logform.component.html',
  styleUrls: ['./add-gas-logform.component.css']
})
export class AddGasLogformComponent implements OnInit {
  yesterday_logs: any;
  user: any;

  constructor(private fuelService:FuelService, private notifService:NotificationService, private logService:LogService) { 
    this.logService.getYesterdayLogs().subscribe((data) => {
      this.yesterday_logs = data
      console.warn("data",data)
    });
  }

  addGasLog(log_info: any) {
    console.warn(log_info);
    this.logService.addLog(log_info).subscribe((result) => {
      console.warn('result', result);
      // this.notifService.submitSuccess('success','Gas log added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    });
  }

  ngOnInit(): void {
  }

}
