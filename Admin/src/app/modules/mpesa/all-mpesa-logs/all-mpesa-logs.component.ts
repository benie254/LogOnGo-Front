import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-all-mpesa-logs',
  templateUrl: './all-mpesa-logs.component.html',
  styleUrls: ['./all-mpesa-logs.component.css']
})
export class AllMpesaLogsComponent implements OnInit, OnDestroy {
  @Input() reload!: () => void;
  myModel = 'Log';
  @Input() myList: any;
  @Input() id: any;
  @Input() admins: any;
  @Input() copy!: (text: number) => void;
  showData: boolean = false;
  hideContent: boolean = false;
  showEdit: boolean = false;
  @Input() fuels: any;
  private unsubscribe$ = new Subject<void>();
  @Input() currentUser!: User;

  constructor(
    private service:AdminService,
  ) { }

  ngOnInit(): void {
    this.allRecords();
  }
  allRecords(){
    this.service.getAllMpesa().pipe(takeUntil(this.unsubscribe$)).subscribe({
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
    const form = (<HTMLFormElement>document.getElementById('addMpesaForm'));
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
