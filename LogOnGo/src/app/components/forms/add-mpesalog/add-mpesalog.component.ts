import { Component, OnInit } from '@angular/core';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-add-mpesalog',
  templateUrl: './add-mpesalog.component.html',
  styleUrls: ['./add-mpesalog.component.css']
})
export class AddMpesalogComponent implements OnInit {

  constructor(private logMpesaService:LogMpesaService, private notifService:NotificationService) { }

  addMpesaLog(mpesa_info: any) {
    console.warn(mpesa_info);
    this.logMpesaService.addMpesaLog(mpesa_info).subscribe((result) => {
      console.warn('result', result);
      this.notifService.submitSuccess('success','Mpesa log added successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    });
  }

  ngOnInit(): void {
  }

}
