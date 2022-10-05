import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Log } from 'src/app/classes/log/log';
import { LogService } from 'src/app/services/log/log.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-update-log-details',
  templateUrl: './update-log-details.component.html',
  styleUrls: ['./update-log-details.component.css']
})
export class UpdateLogDetailsComponent implements OnInit {
  log: any; 
  yesterday_logs: any;
  date: any; 
  username: any;
  form: FormGroup;
  updateConfirmed: boolean = false;
  closed: boolean = false;
  id: number;
  message = ''
  logs: Log;

  constructor(
    private logService:LogService, 
    private notifService:NotificationService,
    private route:ActivatedRoute,
    ) {
    // this.logService.getPetrolLogs().subscribe((data) => {
    //   this.log = data
    //   console.warn("data",data)
    // });

    this.logService.getYesterdayLogs().subscribe((data) => {
      this.yesterday_logs = data
      console.warn("data",data)
    });
   }

  updateLog(log_info:any){
    console.warn(log_info);
    this.logService.updateLogInfo(log_info).subscribe((result) => {
      console.warn('updated result',result);
      // this.notifService.submitSuccess('success','Log details updated successfully!')
    })
  }

  ngOnInit(): void {
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
  get f(){
    return this.form.controls;
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

  updateLogDetails(){
    this.message = '';

    this.logService.updateLogDetails(this.id,this.form.value).subscribe({
        next: (res) => {
          console.log(res);
          Notiflix.Notify.success('updated!');
          // this.message = res.message ? res.message : 'This tutorial was updated successfully!';
          this.closed = true;
        },
        error: (e) => {
          console.error(e)
          Notiflix.Notify.failure('Update failed!')
          this.closed = false;
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
        this.updateConfirmed = true;
        this.closed = false;
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "",
          'Great',
        )
        this.updateConfirmed = false;
      }
    )
  }

  toggleUpdateForm(){
    this.closed = true;
  }

}
