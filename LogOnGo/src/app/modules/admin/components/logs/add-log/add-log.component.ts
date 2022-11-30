import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { Log } from 'src/app/classes/log/log';
import { User } from 'src/app/classes/user/user';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { LogService } from 'src/app/modules/log/services/log/log.service';

@Component({
  selector: 'app-add-log',
  templateUrl: './add-log.component.html',
  styleUrls: ['./add-log.component.css']
})
export class AddLogComponent implements OnInit, OnDestroy {
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
    private log:LogService,
    private auth:AuthService,
  ) { }

  ngOnInit(): void {
    if(this.auth.currentUserValue){
      this.currentUser = this.auth.currentUserValue;
    } else {
      !this.currentUser;
    }
  }
  addLog(data: Log){
    this.log.addLog(data).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        Notiflix.Notify.success('add success');
      }
    })
  }
  
  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}