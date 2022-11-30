import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { User } from 'src/app/classes/user/user';
import { CardService } from 'src/app/modules/card/services/card/card.service';

@Component({
  selector: 'app-all-credit-card-logs',
  templateUrl: './all-credit-card-logs.component.html',
  styleUrls: ['./all-credit-card-logs.component.css']
})
export class AllCreditCardLogsComponent implements OnInit, OnDestroy {
  @Input() reload: () => void;
  myModel = 'Credit Card Log';
  @Input() myList: any;
  @Input() id: any;
  @Input() admins: User;
  @Input() copy: (text: number) => void;
  showData: boolean = false;
  hideContent: boolean = false;
  showEdit: boolean = false;
  @Input() fuels: Fuel;
  private unsubscribe$ = new Subject<void>();


  constructor(
    private card:CardService,
  ) { }

  ngOnInit(): void {
    this.allRecords();
  }
  allRecords(){
    this.card.getAllCreditCardLogs().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        this.myList = res;
      }
    })
  }
  openForm = (): void => {
    this.showData = true;
    this.hideContent = true;
    this.showEdit = false;
  }
  redirect = (): void => {
    setTimeout(() => {
      this.openForm();
    }, 250)
  }
  reset = (): void => {
    const form = (<HTMLFormElement>document.getElementById('addCardForm'));
    setTimeout(() => {
      form.reset();
    }, 250)
  }
  close(){
    this.showData = false;
    this.hideContent = false;
    this.showEdit = false;
  }
  edit(){
    this.showEdit = true;
    this.hideContent = true;
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
