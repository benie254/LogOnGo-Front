import { Component, Input, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { MpesaService } from 'src/app/modules/mpesa/services/mpesa/mpesa.service';

@Component({
  selector: 'app-add-mpesa-log',
  templateUrl: './add-mpesa-log.component.html',
  styleUrls: ['./add-mpesa-log.component.css']
})
export class AddMpesaLogComponent implements OnInit {
  @Input() admins: any;
  @Input() reset: () => void;
  @Input() reload: () => void;
  @Input() fuels: any;
  @Input() id: any; 
  currentUser: any;
  default = 0;

  YYYY = new Date().getFullYear();
  MM = new Date().getMonth() + 1;
  DD = new Date().getDate();
  today = this.YYYY + '-' + this.MM + '-' + this.DD
  tdate = new Date().toDateString();

  constructor(
    private mpesa:MpesaService,
    private auth:AuthService,
  ) { }

  ngOnInit(): void {
    if(this.auth.currentUserValue){
      this.currentUser = this.auth.currentUserValue;
    } else {
      !this.currentUser;
    }
  }
  addLog(data){
    this.mpesa.addMpesaLog(data).subscribe({
      next: (res) => {
        Notiflix.Notify.success('add success');
      }
    })
  }
}