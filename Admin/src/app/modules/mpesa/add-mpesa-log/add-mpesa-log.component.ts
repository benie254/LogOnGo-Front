import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { User } from 'src/app/classes/user/user';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-mpesa-log',
  templateUrl: './add-mpesa-log.component.html',
  styleUrls: ['./add-mpesa-log.component.css']
})
export class AddMpesaLogComponent implements OnInit, OnDestroy {
  @Input() admins!: User;
  @Input() reset!: () => void;
  @Input() reload!: () => void;
  @Input() fuels: any;
  @Input() id: any; 
  currentUser!: User;
  default = 0;
  YYYY = new Date().getFullYear();
  MM = new Date().getMonth() + 1;
  DD = new Date().getDate();
  today = this.YYYY + '-' + this.MM + '-' + this.DD
  tdate = new Date().toDateString();
  private unsubscribe$ = new Subject<void>();

  constructor(
    private service:AdminService,
    private auth:AuthService,
  ) { }

  ngOnInit(): void {
    if(this.auth.currentUserValue){
      this.currentUser = this.auth.currentUserValue;
    } else {
      !this.currentUser;
    }
  }
  addLog(data: LogMpesa){
    this.service.addMpesa(data).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        Notiflix.Notify.success('Added');
      }
    })
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}