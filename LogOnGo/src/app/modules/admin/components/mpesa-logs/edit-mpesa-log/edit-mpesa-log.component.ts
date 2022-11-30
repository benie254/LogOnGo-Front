import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import { LogMpesa } from 'src/app/classes/log-mpesa/log-mpesa';
import { User } from 'src/app/classes/user/user';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { MpesaService } from 'src/app/modules/mpesa/services/mpesa/mpesa.service';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-edit-mpesa-log',
  templateUrl: './edit-mpesa-log.component.html',
  styleUrls: ['./edit-mpesa-log.component.css']
})
export class EditMpesaLogComponent implements OnInit, OnDestroy {
  @Input() id: any;
  @Input() fuels: any;
  @Input() admins: User;
  @Input() reload: () => void;
  @Input() openForm: () => void;
  @Input() redirect: () => void;
  details: LogMpesa;
  delConfirmed: boolean = false;
  currentUser: User;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private service:AdminService,
    private mpesa:MpesaService,
    private auth:AuthService,
  ) { }

  ngOnInit(): void {
    if(this.auth.currentUserValue){
      this.currentUser = this.auth.currentUserValue;
    } else {
      !this.currentUser;
    }
    this.itemDetails();
  }
  editItem(data: LogMpesa){
    this.mpesa.updateMpesaDetails(this.id,data).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        Notiflix.Notify.success('Updated!');
      }
    })
  }
  itemDetails(){
    this.mpesa.getMpesaLogDetails(this.id).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        this.details = res;
      }
    })
  }
  delete(){
    Notiflix.Loading.arrows('Deleting... please wait.')
    this.service.deleteMpesa(this.id).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (res) => {
        Notiflix.Report.success(
          "Deleted!",
          'The mpesa log was deleted successfully.',
          'Great',
        )
        Notiflix.Loading.remove();
      }
    })
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to delete this mpesa log? This action cannot be undone",
      "I'm sure",
      "Take me back",
      () => {
        this.delConfirmed = true;
        this.delete();
        location.reload();
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "You have cancelled the delete request. In case you did so by mistake, please make a new request.",
          'Great',
        )
        this.delConfirmed = false;
      }
    )
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
