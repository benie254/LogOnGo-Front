import { Component, OnInit } from '@angular/core';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-add-log',
  templateUrl: './add-log.component.html',
  styleUrls: ['./add-log.component.css']
})
export class AddLogComponent implements OnInit {
  yesterday_logs: any;

  constructor(private fuelService:FuelService, private notifService:NotificationService, private logService:LogService) { 
    this.logService.getYesterdayLogs().subscribe((data) => {
      this.yesterday_logs = data
      console.warn("data",data)
    });
  }

  addLog(log_info: any) {
    console.warn(log_info);
    this.logService.addLog(log_info).subscribe((result) => {
      console.warn('result', result);
      this.notifService.submitSuccess('success','Log added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    });
  }

  ngOnInit(): void {
  }

}
