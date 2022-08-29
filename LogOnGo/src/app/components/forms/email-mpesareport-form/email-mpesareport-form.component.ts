import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email/email.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-email-mpesareport-form',
  templateUrl: './email-mpesareport-form.component.html',
  styleUrls: ['./email-mpesareport-form.component.css']
})
export class EmailMpesareportFormComponent implements OnInit {

  constructor(private emailService:EmailService, private notifService:NotificationService) { }

  emailMpesaReport(mpesa_report: any) {
    console.warn(mpesa_report);
    this.emailService.emailMpesaReport(mpesa_report).subscribe((result) => {
      console.warn('result', result);
      this.notifService.submitSuccess('success','Mpesa report sent to your email!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    });
  }

  ngOnInit(): void {
  }

}
