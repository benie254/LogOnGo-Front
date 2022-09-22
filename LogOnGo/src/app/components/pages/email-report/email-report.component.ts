import { Component, OnInit } from '@angular/core';
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

  constructor(
    private route:ActivatedRoute,
    private logService:LogService,
    private authService:AuthService,
    private reportService:ReportService,
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

  emailReport(report_info: any){
    Notiflix.Loading.hourglass('Sending...')
    this.reportService.emailLogReport(report_info).subscribe(
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
        Notiflix.Notify.failure('Something went wrong!');
        Notiflix.Notify.warning('Please try again.');
      }
    )
  }
  

}
