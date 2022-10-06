import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
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

  emailReportForm = this.fb.group({
    date:'',
    eod_reading_yesterday: 0,
    eod_reading_lts: 0,
    litres_sold_today: 0,
    amount_earned_today: 0,
    balance: 0,
    logged_by: '',
    admin_name: ['', [Validators.required]],
    admin_email: ['', [Validators.required], [Validators.email]]
 });

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

  emailReport(){
    Notiflix.Loading.hourglass('Sending...')
    this.reportService.emailLogReport(this.emailReportForm.value).subscribe(
      (report_data) => {
      Notiflix.Loading.remove()
      Notiflix.Report.success(
        'Report sent!',
        '"The requested log report has been delivered to your email"',
        'Okay',
      );
        console.warn("email report data:", report_data)
        Notiflix.Notify.success('Email report sent to your email!');
        // Notiflix.Report.success()
      }, 
      err => {
        Notiflix.Loading.remove()
        Notiflix.Report.failure(
          'Sending failed!',
          '"Something went wrong as we attempted to send your email report"',
          'Okay',
        );
        Notiflix.Notify.failure('Something went wrong!');
        Notiflix.Notify.warning('Please try again.');
      }
    )
  }
  

}
