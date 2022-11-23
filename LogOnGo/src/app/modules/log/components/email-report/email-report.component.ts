import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { MyErrorStateMatcher } from 'src/app/modules/auth/services/matcher/matcher.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LogService } from 'src/app/services/log/log.service';
import { ReportService } from 'src/app/services/report/report.service';


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
  errMsg = '';
  statusText = '';
  error: any;


  constructor(
    private route:ActivatedRoute,
    private logService:LogService,
    private authService:AuthService,
    private reportService:ReportService,
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getLogDetails(params['id']))
  }

  getLogDetails(id:number){
    this.logService.getLogDetails(id).subscribe((data) => {
      this.log_details = data
      console.warn("log details",data)
      Notiflix.Notify.success('Get success')
    },
    err => {
      console.warn(err)
      Notiflix.Notify.failure('Something went wrong!')
    }
    );
  }

  emailReport(reportData){
    Notiflix.Loading.hourglass('Sending...')
    this.reportService.emailLogReport(reportData).subscribe(
      (report_data) => {
      Notiflix.Loading.remove()
      Notiflix.Report.success(
        'Report sent!',
        '"The requested log report has been delivered to your email"',
        'Okay',
      );
      }, 
      err => {
        console.error(err)
        Notiflix.Loading.remove()
        this.errMsg = err.error.detail; 
        this.statusText = err.statusText;
        if(this.errMsg && this.statusText){
          Notiflix.Report.failure(
            this.statusText,
            this.errMsg,
            'Okay',
          );
        } else if(this.statusText){
          Notiflix.Report.failure(
            this.statusText,
            'Something went wrong as we attempted to send your email report. Please try again.',
            'Okay',
          );
        } else {
          Notiflix.Report.failure(
            'Sending failed!',
            'Something went wrong as we attempted to send your email report. Please try again.',
            'Okay',
          );
        }
      }
    )
  }
  

}
