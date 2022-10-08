import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';
import * as Notiflix from 'notiflix';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-profile-mpesalogs',
  templateUrl: './profile-mpesalogs.component.html',
  styleUrls: ['./profile-mpesalogs.component.css']
})
export class ProfileMpesalogsComponent implements OnInit {
  mpesa_logs: any;
  info: any; 
  mpesaForm: FormGroup;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [2, 5, 10, 15];
  id: number;

  currentUser = this.authService.currentUserValue;

  constructor(
    private route:ActivatedRoute,
    private logMpesaService:LogMpesaService,
    private formBuilder:FormBuilder,
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => this.getUserMpesaLogs(params['id']))
    this.id = this.route.snapshot.params['id']
    this.mpesaForm = this.formBuilder.group({
      date: ['',Validators['date']],
      transaction_number: ['',Validators['required']],
      customer_name: ['',Validators['required']],
      customer_phone_number: [0,Validators['required']],
      amount: [0,Validators['required']],
      amount_transferred_to_bank: 0,
      user: 0,
      logged_by: ''
    });
    this.getUserMpesaLogs();
  }

  get f() { return this.mpesaForm.controls; }


  addMpesaLog(mpesa_info) {
    this.logMpesaService.addMpesaLog(mpesa_info).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('Mpesa log added successful!');
      this.ngOnInit();
    }, 
    err => {
      Notiflix.Notify.failure('Something went wrong!');
      Notiflix.Notify.warning('Please try again.');
    });
  }

  getUserMpesaLogs(): void{
    this.logMpesaService.getUserMpesaLogs(this.id).subscribe(
      data => {
      this.mpesa_logs = data
      console.warn('user_mpesa_logs:',data)
    },
    error => {
      console.log(error)
      Notiflix.Notify.failure('Something went wrong!');
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getUserMpesaLogs();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUserMpesaLogs();
  }

}
