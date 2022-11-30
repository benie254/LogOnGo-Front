import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { CreditCard } from 'src/app/classes/card/credit-card';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { User } from 'src/app/classes/user/user';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { CardService } from 'src/app/modules/card/services/card/card.service';

@Component({
  selector: 'app-add-credit-card-log',
  templateUrl: './add-credit-card-log.component.html',
  styleUrls: ['./add-credit-card-log.component.css']
})
export class AddCreditCardLogComponent implements OnInit, OnDestroy {
  @Input() admins: User;
  @Input() reset: () => void;
  @Input() reload: () => void;
  @Input() fuels: any;
  @Input() id: any; 
  currentUser: User;
  YYYY = new Date().getFullYear();
  MM = new Date().getMonth() + 1;
  DD = new Date().getDate();
  today = this.YYYY + '-' + this.MM + '-' + this.DD
  tdate = new Date().toDateString();
  private unsubscribe$ = new Subject<void>();

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
  addCard(data: CreditCard){
    this.card.addCreditCardLog(data).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        Notiflix.Notify.success('Added!');
      }
    })
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}