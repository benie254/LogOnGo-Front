import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Fuel } from 'src/app/classes/fuel/fuel';
import { Log } from 'src/app/classes/log/log';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-log-details',
  templateUrl: './log-details.component.html',
  styleUrls: ['./log-details.component.css']
})
export class LogDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() logDetails: Log = {
    // id: 0,
    date: '',
    eod_reading_lts: 0,
    eod_reading_yesterday: 0,
    total_litres_sold: 0,
    amount_earned_today: 0,
    fuel: 0,
    fuel_name: '',
    logged_by: '',
    user_id: 0,
    balance: 0,
    balance_yesterday: 0,
    updated_balance: 0,
    first_logged: '',
    last_edited: ''
  };
  message = '';
  logs: Log;
  id: number;
  yesterday_logs: any;
  petrol_received_info: any;
  form: FormGroup;
  currentUser = this.authService.currentUserValue;

  constructor(
    private route:ActivatedRoute, 
    private logService:LogService,
    private authService:AuthService,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getLogDetails(params['id']))
    this.id = this.route.snapshot.params['id'];
    // this.route.params.subscribe(params => this.updateLogDetails(params['id']))
    this.message = '';

    this.form = new FormGroup({
      date: new FormControl('', [Validators.required]),
      eod_reading_lts: new FormControl(0, Validators.required),
      // eod_reading_yesterday: new FormControl(0, [Validators.required]),
      // total_litres_sold: new FormControl(0, [Validators.required]),
      // amount_earned_today: new FormControl(0, [Validators.required]),
      // fuel: new FormControl(0, [Validators.required]),
      // fuel_name: new FormControl('', [Validators.required]),
      // logged_by: new FormControl('', [Validators.required]),
      // user_id: new FormControl(0, [Validators.required]),
    });
  }

  getLogDetails(id:number){
    this.logService.getLogDetails(id).subscribe((data) => {
      this.logs = data
      console.warn("log details",data)
      Notiflix.Notify.success('Get success')
    },
    err => {
      console.warn(err)
      Notiflix.Notify.failure('Something went wrong!')
    }
    );
  }
  // updatePosted(status){
  //   const data = {
  //     date: this.logs.date,
  //     fuel: this.logs.fuel,
  //     fuel_name: this.logs.fuel_name, 
  //     eod_reading_lts: this.logs.eod_reading_lts, 
  //     eod_reading_yesterday: this.logs.eod_reading_yesterday, 
  //     total_litres_sold: this.logs.total_litres_sold, 
  //     amount_earned_today: this.logs.amount_earned_today, 
  //     balance: this.logs.balance, 
  //     updated_balance:this.logs.updated_balance, 
  //     balance_yesterday: this.logs.balance_yesterday, 
  //     user_id: this.logs.user_id, 
  //     logged_by: this.logs.logged_by, 
  //   };
  //   this.logService.updateLogDetails(this.logs.id, data).subscribe(
  //     response => {
  //       console.log(response);
  //       Notiflix.Notify.success('Updated!')
  //     },
  //     error => {
  //       console.log(error)
  //       alert(error)
  //       Notiflix.Notify.failure('Update failed!')
  //     }
  //   );
  // }

  get f(){
    return this.form.controls;
  }

  updateLogDetails(){
    this.message = '';

    this.logService.updateLogDetails(this.id,this.form.value).subscribe({
        next: (res) => {
          console.log(res);
          Notiflix.Notify.success('updated!');
          // this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => {
          console.error(e)
          Notiflix.Notify.failure('Update failed!')
        } 
      });
  }

  reportWarn(){
    Notiflix.Confirm.show(
      'Confirm update',
      "Are you sure you want to edit this log?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.info(
          "Remember",
          "We keep records of all updates.",
          "Okay",
        )
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "Everything looks good.",
          'Great',
        )
      }
    )
  }

}
