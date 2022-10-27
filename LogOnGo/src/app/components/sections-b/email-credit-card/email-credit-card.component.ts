import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { Validators } from 'ngx-editor';
import * as Notiflix from 'notiflix';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CreditCardService } from 'src/app/services/card/credit-card.service';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';
import { ReportService } from 'src/app/services/report/report.service';
import { MyErrorStateMatcher } from '../../auth/login/login.component';


@Component({
  selector: 'app-email-credit-card',
  templateUrl: './email-credit-card.component.html',
  styleUrls: ['./email-credit-card.component.css']
})
export class EmailCreditCardComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  mpesa_log_details: any;
  user: any;
  cardDetails: any;
  currentUser = this.authService.currentUserValue;
  errMsg = '';
  statusText = '';


  constructor(
    private emailService:ReportService,
    private cardService:CreditCardService,
    private route:ActivatedRoute,
    private authService:AuthService,
    private fb:FormBuilder,
    ) { 
    
  }

  emailCardReport(cardData) {
    Notiflix.Loading.hourglass('Sending... please wait.')
    // Notiflix.Block.arrows('Please wait')
    this.emailService.emailCardReport(cardData).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Loading.remove()
      Notiflix.Report.success(
        "Sent!",
        "The requested card report has been delivered to your email. Remember to check it out!",
        "Okay"
        )
    },
    err => {
      console.error(err);
      Notiflix.Loading.remove();
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
    this.route.params.subscribe(params => this.getCardDetails(params['id']))
  }

  getCardDetails(id:number){
    this.cardService.getCreditCardLogDetails(id).subscribe(
      (data) => {
        this.cardDetails = data
        console.warn("card log details",data)
      },
      err => {
        console.warn(err)
      }
    );
  }

}
