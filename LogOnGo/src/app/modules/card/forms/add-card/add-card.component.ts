import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { FuelService } from 'src/app/modules/fuel/services/fuel.service';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  closed: boolean;
  currentUser = this.authService.currentUserValue;
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
  fuels: any;

  constructor(
    
    private creditCardService:CardService,
    private authService:AuthService,
    private fuelService:FuelService,
  ) { }
   

  ngOnInit(): void {
    this.fuelService.getFuels().subscribe({
      next: (res) => {
        this.fuels = res;
      }
    })
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
