import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-email-mpesareport',
  templateUrl: './email-mpesareport.component.html',
  styleUrls: ['./email-mpesareport.component.css']
})
export class EmailMpesareportComponent implements OnInit {

  mpesa_log_details: any;
  user: any;
  mpesa_cumulative: any;
  mpesaDetails: LogMpesa;
  currentUser = this.authService.currentUserValue;


  constructor(
    private emailService:ReportService,
    private mpesaService:LogMpesaService,
    private route:ActivatedRoute,
    private authService:AuthService,
    ) { 
    
  }

  emailMpesaReport(mpesa_report: any) {
    console.warn(mpesa_report);
    Notiflix.Loading.hourglass('Sending... please wait.')
    // Notiflix.Block.arrows('Please wait')
    this.emailService.emailMpesaReport(mpesa_report).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Loading.remove()
      Notiflix.Report.success(
        "Sent!",
        "The requested mpesa log report has been delivered to your email. Remember to check it out!",
        "Okay"
        )
      // this.notifService.submitSuccess('success','Mpesa report sent to your email!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getMpesaLogDetails(params['id']))
  }

  getMpesaLogDetails(id:number){
    this.mpesaService.getMpesaLogDetails(id).subscribe(
      (data) => {
        this.mpesaDetails = data
        console.warn("mpesa log details",data)
        Notiflix.Notify.success('Get mpesa details success')
      },
      err => {
        console.warn(err)
        Notiflix.Notify.failure('Something went wrong!')
      }
    );
  }

}
