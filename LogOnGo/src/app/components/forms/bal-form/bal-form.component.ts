import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-bal-form',
  templateUrl: './bal-form.component.html',
  styleUrls: ['./bal-form.component.css']
})
export class BalFormComponent implements OnInit {
  yesterday_logs: any;

  constructor(private logService:LogService, private notifService:NotificationService) { 
    this.logService.getYesterdayLogs().subscribe((data) => {
      this.yesterday_logs = data
      console.warn("data",data)
    });
  }

  updateBal(log_info:any){
    console.warn(log_info);
    this.logService.updateLogInfo(log_info).subscribe((result) => {
      console.warn('updated result',result);
      // this.notifService.submitSuccess('success','Balance request successful!')
    })
  }

  ngOnInit(): void {
  }

}
