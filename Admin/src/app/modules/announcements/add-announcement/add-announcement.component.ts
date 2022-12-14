import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { Announcement } from 'src/app/classes/announcement/announcement';
import { User } from 'src/app/classes/user/user';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthService } from '../../auth/services/auth/auth.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})
export class AddAnnouncementComponent implements OnInit, OnDestroy {
  @Input()
  admins!: User;
  @Input()
  reset!: () => void;
  @Input()
  reload!: () => void;
  currentUser: any;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private service:AdminService,
    private auth:AuthService,
  ) { }

  ngOnInit(): void {
    if(this.auth.currentUserValue){
      this.currentUser = this.auth.currentUserValue;
    } else{
      !this.currentUser;
    }
  }
  addAnnouncement(data: Announcement){
    this.service.addAnnouncement(data).pipe(takeUntil(this.unsubscribe$)).subscribe({
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
