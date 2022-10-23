import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from 'ngx-editor';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CreditCardService } from 'src/app/services/card/credit-card.service';
import { FuelService } from 'src/app/services/fuel/fuel.service';

@Component({
  selector: 'app-add-gas-credit-form',
  templateUrl: './add-gas-credit-form.component.html',
  styleUrls: ['./add-gas-credit-form.component.css']
})
export class AddGasCreditFormComponent implements OnInit {

  closed: boolean;
  currentUser = this.authService.currentUserValue;
  creditCardForm: FormGroup;
  gasInfo: any;
  today = new Date().toISOString();
  error: any; 
  message = '';
  show: boolean;
  
  

  constructor(
    
    private creditCardService:CreditCardService,
    private fb:FormBuilder,
    private authService:AuthService,
    private fuelService:FuelService,
  ) {
    this.fuelService.getGasInfo().subscribe(
      data => {
        this.gasInfo = data;
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
  addCreditCardLog() {
    this.creditCardService.addCreditCardLog(this.creditCardForm.value).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('CreditCard log added successful!');
      this.ngOnInit();
      location.reload();
    }, 
    err => {
      this.error = err;
      this.message = this.error.statusText;
      Notiflix.Notify.failure(this.message);
      Notiflix.Notify.warning('Please try again.');
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