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
  tableSize: number = 2;
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

    this.getUserMpesaLogs();
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
