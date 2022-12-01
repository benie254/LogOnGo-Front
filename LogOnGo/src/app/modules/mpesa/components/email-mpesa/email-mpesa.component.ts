import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { MyErrorStateMatcher } from 'src/app/modules/auth/services/matcher/matcher.service';
import { MpesaService } from '../../services/mpesa/mpesa.service';

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

  constructor(
    private mpesa:MpesaService,
    private route:ActivatedRoute,
    private authService:AuthService,
    ) { 
    
  }

  emailMpesaReport(reportData) {
    Notiflix.Loading.hourglass('Sending... please wait.')
    // Notiflix.Block.arrows('Please wait')
    this.mpesa.emailMpesaReport(reportData).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Loading.remove()
      Notiflix.Report.success(
        "Sent!",
        "The requested mpesa log report has been delivered to your email. Remember to check it out!",
        "Okay"
        )
      history.back();
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getMpesaLogDetails(params['id']))
  }

  getMpesaLogDetails(id:number){
    this.mpesa.getMpesaLogDetails(id).subscribe(
      (data) => {
        this.mpesaDetails = data
        console.warn("mpesa log details",data)
      }
    );
  }

}

