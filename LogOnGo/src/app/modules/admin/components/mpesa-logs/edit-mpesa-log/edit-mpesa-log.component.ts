import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { MpesaService } from 'src/app/modules/mpesa/services/mpesa/mpesa.service';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-edit-mpesa-log',
  templateUrl: './edit-mpesa-log.component.html',
  styleUrls: ['./edit-mpesa-log.component.css']
})
export class EditMpesaLogComponent implements OnInit {
  @Input() id: any;
  @Input() fuels: any;
  @Input() admins: any;
  @Input() reload: () => void;
  @Input() openForm: () => void;
  @Input() redirect: () => void;
  details: any;
  delConfirmed: boolean = false;
  currentUser: any;

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
  editItem(data){
    this.mpesa.updateMpesaDetails(this.id,data).subscribe({
      next: (res) => {
        Notiflix.Notify.success('update successful!');
      }
    })
  }
  itemDetails(){
    this.mpesa.getMpesaLogDetails(this.id).subscribe({
      next: (res) => {
        this.details = res;
      }
    })
  }
  delete(){
    Notiflix.Loading.arrows('Deleting... please wait.')
    this.service.deleteMpesa(this.id).subscribe({
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

  
  
}
