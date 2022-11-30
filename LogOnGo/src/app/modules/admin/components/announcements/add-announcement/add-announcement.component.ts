import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})
export class AddAnnouncementComponent implements OnInit, OnDestroy {
  @Input() admins: any;
  @Input() reset: () => void;
  @Input() reload: () => void;
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
  addAnnouncement(data){
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
