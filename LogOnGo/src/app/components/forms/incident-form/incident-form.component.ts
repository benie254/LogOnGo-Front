import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email/email.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.css']
})
export class IncidentFormComponent implements OnInit {
  EMERGENCY: any; 
  Equipment_Failure: any;
  Physical_Injury: any;
  username: any;

  constructor(private emailService:EmailService, private notifService:NotificationService) { }

  incidentReport(incident_report: any) {
    console.warn(incident_report);
    this.emailService.emailIncidentReport(incident_report).subscribe((result) => {
      console.warn('result', result);
      // this.notifService.submitSuccess('success','Incident report sent successfully!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    });
  }
  ngOnInit(): void {
  }

}
