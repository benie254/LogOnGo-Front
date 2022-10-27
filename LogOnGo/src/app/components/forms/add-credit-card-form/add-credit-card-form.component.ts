import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from 'ngx-editor';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CreditCardService } from 'src/app/services/card/credit-card.service';
import { FuelService } from 'src/app/services/fuel/fuel.service';

@Component({
  selector: 'app-add-credit-card-form',
  templateUrl: './add-credit-card-form.component.html',
  styleUrls: ['./add-credit-card-form.component.css']
})
export class AddCreditCardFormComponent implements OnInit {

  closed: boolean;
  currentUser = this.authService.currentUserValue;
  creditCardForm: FormGroup;
  petrolInfo: any;
  today = new Date().toISOString();
  error: any; 
  message = '';
  show: boolean;
  errMsg = '';
  errName = '';
  errNo = '';
  errAmount = '';
  errDate = '';
  statusText = '';

  
  

  constructor(
    
    private creditCardService:CreditCardService,
    private fb:FormBuilder,
    private authService:AuthService,
    private fuelService:FuelService,
  ) {
    this.fuelService.getPetrolInfo().subscribe(
      data => {
        this.petrolInfo = data;
      }
    )
    
   }
   

  ngOnInit(): void {
    this.creditCardForm = this.fb.group({
      date: ['', [Validators.required]],
      fuel: 0,
      card_name: ['', [Validators.required]],
      card_number: [0, [Validators['required'],Validators['min'](1000000000000000),Validators['max'](9999999999999999)]],
      amount: [0, [Validators.required]],
      logged_by: '',
      user: 0
    });
  }
  addCreditCardLog(cardData) {
    this.creditCardService.addCreditCardLog(cardData).subscribe({
      next: (result) => {
        console.warn('result', result);
        Notiflix.Notify.success('CreditCard log added successful!');
        location.reload();
        this.errMsg = '';
            this.errDate = '';
            this.errAmount = '';
            this.errName = '';
            this.errNo = '';
      }, 
      error: (e) => {
        this.error = e;
        this.message = this.error.statusText;
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

  toggleCreditCardLog(){
    this.closed = true;
  }
  closeForm(){
    this.closed = false;
  }
  toggleCreditCard(){
    this.show = true;
  }
  close(){
    this.show = false;
  }

}
