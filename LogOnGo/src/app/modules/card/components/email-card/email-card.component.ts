import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { EmailService } from 'src/app/modules/services/email/email.service';
import { MyErrorStateMatcher } from 'src/app/modules/services/matcher/matcher.service';
import { CardService } from '../../services/card/card.service';


@Component({
  selector: 'app-email-card',
  templateUrl: './email-card.component.html',
  styleUrls: ['./email-card.component.css']
})
export class EmailCardComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  mpesa_log_details: any;
  user: any;
  cardDetails: any;
  currentUser = this.authService.currentUserValue;
  errMsg = '';
  statusText = '';


  constructor(
    private emailService:EmailService,
    private cardService:CardService,
    private route:ActivatedRoute,
    private authService:AuthService,
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
