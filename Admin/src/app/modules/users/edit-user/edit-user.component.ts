import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { User } from 'src/app/classes/user/user';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthService } from '../../auth/services/auth/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.less']
})
export class EditUserComponent implements OnInit {
  @Input() id: any;
  @Input() reload!: () => void;
  @Input() openForm!: () => void;
  @Input() redirect!: () => void;
  delConfirmed: boolean = false;
  @Input() currentUser!: User;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private service:AdminService,
  ) { }

  ngOnInit(): void {
  }

  
  

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

