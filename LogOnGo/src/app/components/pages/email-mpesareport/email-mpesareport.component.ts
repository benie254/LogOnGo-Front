import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';
import { ReportService } from 'src/app/services/report/report.service';
import { MyErrorStateMatcher } from '../../auth/login/login.component';

@Component({
  selector: 'app-email-mpesareport',
  templateUrl: './email-mpesareport.component.html',
  styleUrls: ['./email-mpesareport.component.css']
})
export class EmailMpesareportComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  mpesa_log_details: any;
  user: any;
  mpesa_cumulative: any;
  mpesaDetails: LogMpesa;
  currentUser = this.authService.currentUserValue;
  errMsg = '';
  statusText = '';

  mpesaReportForm = this.fb.group({
    date: '',
    transaction_number: '',
    customer_name: '',
    customer_phone_number: 0,
    amount: 0,
    amount_transferred_to_bank: 0,
    daily_total: 0,
    cumulative_amount: 0,
    logged_by: '',
    admin_name: ['', [Validators.required]],
    admin_email: ['', [Validators.required], [Validators.email]]
 });

  constructor(
    private emailService:ReportService,
    private mpesaService:LogMpesaService,
    private route:ActivatedRoute,
    private authService:AuthService,
    private fb:FormBuilder,
    ) { 
    
  }

  emailMpesaReport(reportData) {
    Notiflix.Loading.hourglass('Sending... please wait.')
    // Notiflix.Block.arrows('Please wait')
    this.emailService.emailMpesaReport(reportData).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Loading.remove()
      Notiflix.Report.success(
        "Sent!",
        "The requested mpesa log report has been delivered to your email. Remember to check it out!",
        "Okay"
        )
      // this.notifService.submitSuccess('success','Mpesa report sent to your email!')
      // this.notifService.showSuccess("Data posted successfully !!", "Notification")
    },
    err => {
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
