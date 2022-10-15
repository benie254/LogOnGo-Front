import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FuelService } from 'src/app/services/fuel/fuel.service';
import { CreditCardService } from 'src/app/services/card/credit-card.service';

@Component({
  selector: 'app-no-credit-gas',
  templateUrl: './no-credit-gas.component.html',
  styleUrls: ['./no-credit-gas.component.css']
})
export class NoCreditGasComponent implements OnInit {

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
