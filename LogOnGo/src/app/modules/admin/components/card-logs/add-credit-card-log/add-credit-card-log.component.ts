import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { CardService } from 'src/app/modules/card/services/card/card.service';

@Component({
  selector: 'app-add-credit-card-log',
  templateUrl: './add-credit-card-log.component.html',
  styleUrls: ['./add-credit-card-log.component.css']
})
export class AddCreditCardLogComponent implements OnInit {
  @Input() admins: any;
  @Input() reset: () => void;
  @Input() reload: () => void;
  @Input() fuels: any;
  @Input() id: any; 
  currentUser: any;

  YYYY = new Date().getFullYear();
  MM = new Date().getMonth() + 1;
  DD = new Date().getDate();
  today = this.YYYY + '-' + this.MM + '-' + this.DD
  tdate = new Date().toDateString();

  constructor(
    private card:CardService,
    private auth:AuthService,
  ) { }

  ngOnInit(): void {
    if(this.auth.currentUserValue){
      this.currentUser = this.auth.currentUserValue;
    } else {
      !this.currentUser;
    }
  }
  addCard(data){
    this.card.addCreditCardLog(data).subscribe({
      next: (res) => {
        Notiflix.Notify.success('add success');
      }
    })
  }
}