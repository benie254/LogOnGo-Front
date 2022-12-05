import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { MyErrorStateMatcher } from 'src/app/modules/auth/services/matcher/matcher.service';
import { LogService } from '../../services/log/log.service';


@Component({
  selector: 'app-email-report',
  templateUrl: './email-report.component.html',
  styleUrls: ['./email-report.component.css']
})
export class EmailReportComponent implements OnInit {
  petrol_info: any; 
  yesterday_petrol_logs: any; 
  petrol_received: any; 
  log_details: any;
  user: any; 
  // emailReport: any;
  currentUser = this.authService.currentUserValue;
  matcher = new MyErrorStateMatcher();


  constructor(
    private route:ActivatedRoute,
    private log:LogService,
    private authService:AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.currentUser = this.authService.currentUserValue
    } else {
      this.currentUser = '';
      this.authService.logout();
      this.router.navigate(['/auth'])
    }
    this.route.params.subscribe(params => this.getLogDetails(params['id']));
  }

  getLogDetails(id:number){
    Notiflix.Loading.dots('Loading...');
    this.log.getLogDetails(id).subscribe((data) => {
      Notiflix.Loading.remove();
      this.log_details = data
      console.warn("log details",data)
    }
    );
  }
  emailReport(reportData){
    Notiflix.Loading.hourglass('Sending... please wait.')
    this.log.emailLogReport(reportData).subscribe({
      next: (report_data) => {
        Notiflix.Loading.remove()
        Notiflix.Report.success(
          'Report sent!',
          'The requested log report has been delivered to your email.',
          'Thanks',
        );
        history.back();
      }
    })
  }
  

}
