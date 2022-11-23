import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EmailService } from 'src/app/services/email/email.service';
import { Editor, Validators } from 'ngx-editor';
import { FormBuilder } from '@angular/forms';

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
  currentUser = this.authService.currentUserValue;
  editor: Editor;
  html: '';
  today = new Date();

  incidentForm = this.fb.group({
    incident_date: ['', [Validators.required]],
    your_name: ['', [Validators.required]],
    your_email: ['', [Validators.required]],
    nature: ['', [Validators.required]],
    description: ['', [Validators.required]],
 });


  constructor(
    private emailService:EmailService,
    private authService:AuthService,
    private fb:FormBuilder,
    ) { }

  incidentReport(incident_report: any) {
    console.warn(incident_report);
    Notiflix.Loading.hourglass("Reporting, please wait...")
    this.emailService.emailIncidentReport(incident_report).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Loading.remove()
      Notiflix.Report.success(
        'Incident report sent!',
        '"The reported incident has been delivered to the admin"',
        'Okay',
      );
        // Notiflix.Report.success()
      }, 
      err => {
        Notiflix.Loading.remove()
        Notiflix.Report.failure(
          'Sending failed!',
          '"Something went wrong as we attempted to send your incident report"',
          'Okay',
        );
        Notiflix.Notify.warning('Please try again.');
      });
  }
  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
