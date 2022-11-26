import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  closed: boolean;
  YYYY = new Date().getFullYear();
  MM = new Date().getMonth() + 1;
  DD = new Date().getDate();
  today = this.YYYY + '-' + this.MM + '-' + this.DD
  tdate = new Date().toDateString();
  show: boolean;
  @Input() currentUser: any;
  @Input() fuelInfo: any;
  dateValue = '';
  dateV = '';

  constructor(
    private creditCardService:CardService,
  ) { }
   

  ngOnInit(): void {
  }
  addCreditCardLog(cardData) {
    Notiflix.Loading.hourglass('Adding... please wait')
    this.creditCardService.addCreditCardLog(cardData).subscribe({
      next: (result) => {
        Notiflix.Notify.success('Credit Card log added successfully!');
        location.reload();
      }
    });
  }
  toggleCreditCard(){
    this.show = true;
  }
  close(){
    this.show = false;
  }
  onKey(event: any){
    this.dateValue = event.target.value;
  }
  checkDate(){
    
    
    
    // window.alert(dateIn)
    
    
    
  }

}
