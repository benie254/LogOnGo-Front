import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { FuelService } from 'src/app/modules/fuel/services/fuel.service';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'app-no-card',
  templateUrl: './no-card.component.html',
  styleUrls: ['./no-card.component.css']
})
export class NoCardComponent implements OnInit {
  closed: boolean;
  currentUser = this.authService.currentUserValue;
  creditCardForm: FormGroup;
  petrolInfo: any;
  today = new Date().toISOString();
  error: any; 
  message = '';
  show: boolean;
  
  

  constructor(
    private cardService:CardService,
    private authService:AuthService,
    private fuelService:FuelService,
  ) {
    // this.fuelService.getFuelInfo(id).subscribe(
    //   data => {
    //     this.petrolInfo = data;
    //   }
    // )
    
   }
   

  ngOnInit(): void {
   
  }
  addCreditCardLog(cardData) {
    this.cardService.addCreditCardLog(cardData).subscribe((result) => {
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

