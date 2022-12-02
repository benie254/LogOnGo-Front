import { Component, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.less']
})
export class AllUsersComponent implements OnInit {
  @Input() reload!: () => void;
  myModel = 'Log';
  @Input() id: any;
  @Input() copy!: (text: number) => void;
  private unsubscribe$ = new Subject<void>();
  @Input() currentUser!: User;
  myList: any;
  showData: boolean = false;
  hideContent: boolean = false;
  showEdit: boolean = false;

  constructor(
    private service:AdminService,
  ) { }

  ngOnInit(): void {
    this.allRecords();
  }
  allRecords(){
    this.service.getAllUsers().pipe(takeUntil(this.unsubscribe$)).subscribe({
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
    const form = (<HTMLFormElement>document.getElementById('regForm'));
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
