import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Editor } from 'ngx-editor';
import { UserService } from '../../services/user/user.service';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.css']
})
export class IncidentFormComponent implements OnInit {
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  EMERGENCY: any; 
  Equipment_Failure: any;
  Physical_Injury: any;
  username: any;
  currentUser = this.authService.currentUserValue;
  editor: Editor;
  html: '';
  YYYY = new Date().getFullYear();
  MM = new Date().getMonth() + 1;
  DD = new Date().getDate();
  today = this.YYYY + '-' + this.MM + '-' + this.DD
  tdate = new Date().toDateString();


  constructor(
    private user:UserService,
    private authService:AuthService,
    ) { }

  incidentReport(incident: any) {
    console.warn(incident);
    Notiflix.Loading.hourglass("Reporting, please wait...")
    this.user.reportIncident(incident).subscribe({
      next: (result) => {
        console.warn('result', result);
        Notiflix.Loading.remove()
        Notiflix.Report.success(
          'Incident report sent!',
          '"The reported incident has been delivered to the admin"',
          'Okay',
        );
      }
    });
  }
  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
