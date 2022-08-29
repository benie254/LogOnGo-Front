import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-update-log-details',
  templateUrl: './update-log-details.component.html',
  styleUrls: ['./update-log-details.component.css']
})
export class UpdateLogDetailsComponent implements OnInit {

  constructor(private logService:LogService, private notifService:NotificationService) { }

  updateLog(log_info:any){
    console.warn(log_info);
    this.logService.updateLogInfo(log_info).subscribe((result) => {
      console.warn('updated result',result);
      this.notifService.submitSuccess('success','Log details updated successfully!')
    })
  }

  ngOnInit(): void {
  }

}
