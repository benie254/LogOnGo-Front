import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CreditCardService } from 'src/app/services/card/credit-card.service';  

@Component({
  selector: 'app-credit-details',
  templateUrl: './credit-details.component.html',
  styleUrls: ['./credit-details.component.css']
})
export class CreditDetailsComponent implements OnInit {
  creditCardDetails: any; 
  id: number;
  currentUser = this.authService.currentUserValue;
  closed: boolean = false;
  updateConfirmed: boolean = false;
  date = '';
  error: any;
  message = '';
  errMsg = '';
  errName = '';
  errNo = '';
  errAmount = '';
  errDate = '';
  statusText = '';

  constructor(
    private creditCardService:CreditCardService,
    private route:ActivatedRoute,
    private authService:AuthService,
    private router:Router,
  ) { 

    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => this.getCreditCardLogDetails(params['id']));
    this.getCreditCardLogDetails(this.id)
  }
  getCreditCardLogDetails(id:number){
    this.creditCardService.getCreditCardLogDetails(id).subscribe({
      next: (data) => {
        this.creditCardDetails = data
        this.date = this.creditCardDetails.date
      }
    });
  }
  updateCreditCardDetails(cardData){
    this.creditCardService.updateCreditCardDetails(this.id,cardData).subscribe({
        next: (res) => {
          console.log(res);
          Notiflix.Notify.success('updated!');
          this.closed = true;
          this.errMsg = '';
          this.errDate = '';
          this.errAmount = '';
          this.errName = '';
          this.errNo = '';
        },
        error: (e) => {
          console.error(e)
          Notiflix.Notify.failure('Update failed!')
          this.closed = false;
          this.errMsg = e.error.detail;
          this.statusText = e.statusText;
          this.errDate = e.error.date;
          this.errName = e.error.card_name;
          this.errNo = e.error.card_number;
          this.errAmount = e.error.amount;
          if(this.errMsg && this.statusText){
            Notiflix.Report.failure(
              this.statusText,
              this.errMsg,
              'Okay',
            )
          } else if(this.statusText){
            Notiflix.Report.failure(
              this.statusText,
              'Please fix the highlighted errors and try again.',
              'Okay',
            )
          }
        } 
      });
  }
  reportWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to edit this log?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.info(
          "Remember",
          "We keep records of all updates.",
          "Okay",
        )
        this.updateConfirmed = true;
        this.closed = false;
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "",
          'Great',
        )
        this.updateConfirmed = false;
      }
    )
  }
  toggleUpdateForm(){
    this.closed = true;
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm delete',
      "Are you sure you want to delete this log?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.warning(
          "Please note",
          "We will send this request to the administration.",
          "Okay",
        )
        this.router.navigate(['/delete-card/' + this.id])
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "",
          'Great',
        )
      }
    )
  }

}
