import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { EmailService } from 'src/app/modules/services/email/email.service';
import { MyErrorStateMatcher } from 'src/app/modules/services/matcher/matcher.service';
import { MpesaService } from 'src/app/modules/services/mpesa/mpesa.service';

@Component({
  selector: 'app-email-mpesa',
  templateUrl: './email-mpesa.component.html',
  styleUrls: ['./email-mpesa.component.css']
})
export class EmailMpesaComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  mpesa_log_details: any;
  user: any;
  mpesa_cumulative: any;
  mpesaDetails: any;
  currentUser = this.authService.currentUserValue;
  errMsg = '';
  statusText = '';


  constructor(
    private emailService:EmailService,
    private mpesaService:MpesaService,
    private route:ActivatedRoute,
    private authService:AuthService,
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

