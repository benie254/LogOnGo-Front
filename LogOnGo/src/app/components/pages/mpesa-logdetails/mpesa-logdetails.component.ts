import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LogMpesaService } from 'src/app/services/log-mpesa/log-mpesa.service';

@Component({
  selector: 'app-mpesa-logdetails',
  templateUrl: './mpesa-logdetails.component.html',
  styleUrls: ['./mpesa-logdetails.component.css']
})
export class MpesaLogdetailsComponent implements OnInit {
  mpesaDetails: any; 
  delConfirmed: boolean = false;
  id: number;
  mpesaDetailsForm: FormGroup;
  updateForm: FormGroup;
  formBuilder: FormBuilder;
  currentUser = this.authService.currentUserValue;
  closed: boolean = false;
  updateConfirmed: boolean = false;
  mpesaUpdateForm = this.fb.group({
    date: ['', [Validators.required]],
    transaction_number: ['', [Validators.required]],
    customer_name: ['', [Validators.required]],
    customer_phone_number: [0, [Validators.required]],
    amount: [0, [Validators.required]],
    amount_transferred_to_bank: [0, [Validators.required]],
 });
 error: any;
 message = '';


  constructor(
    private mpesaService:LogMpesaService,
    private route:ActivatedRoute,
    private authService:AuthService,
    private fb:FormBuilder,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => this.getMpesaLogDetails(params['id']))
    this.mpesaDetailsForm = new FormGroup({
      date: new FormControl('',Validators['date']),
      transaction_number: new FormControl('',Validators['required']),
      customer_name: new FormControl('',Validators['required']),
      customer_phone_number: new FormControl(0,Validators['required']),
      amount: new FormControl(0,Validators['required']),
      amount_transferred_to_bank: new FormControl(0),
      user: new FormControl(0),
      logged_by: new FormControl('')
    });
    this.updateForm = new FormGroup({
      date: new FormControl('',Validators['date']),
      transaction_number: new FormControl('',Validators['required']),
      customer_name: new FormControl('',Validators['required']),
      customer_phone_number: new FormControl(0,Validators['required']),
      amount: new FormControl(0,Validators['required']),
      amount_transferred_to_bank: new FormControl(0),
    });
  }

  get f() { return this.mpesaDetailsForm.controls; }

  getMpesaLogDetails(id:number){
    this.mpesaService.getMpesaLogDetails(id).subscribe(
      (data) => {
        this.mpesaDetails = data
        console.warn("mpesa log details",data)
        Notiflix.Notify.success('Get mpesa details success')
      },
      err => {
        this.error = err;
        this.message = this.error.statusText;
        Notiflix.Notify.failure(this.message);
        console.warn(err)
        Notiflix.Notify.failure('Something went wrong!')
      }
    );
  }

  addMpesaLog(mpesa_info: any) {
    this.mpesaService.addMpesaLog(mpesa_info).subscribe((result) => {
      console.warn('result', result);
      Notiflix.Notify.success('Mpesa log added successful!');
      this.ngOnInit();
    }, 
    err => {
      console.warn(err)
      Notiflix.Notify.failure('Something went wrong!');
      Notiflix.Notify.warning('Please try again.');
    });
  }

  updateMpesaDetails(){

    this.mpesaService.updateMpesaDetails(this.id,this.mpesaUpdateForm.value).subscribe({
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
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm delete',
      "Are you sure you want to delete this log?",
      "I'm sure",
      "Take me back",
      () => {
        Notiflix.Report.warning(
          "Please note",
          "We will send this request to the administration.",
          "Okay",
        )
        this.delConfirmed = true;
        this.router.navigate(['/delete-card/' + this.id])
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "",
          'Great',
        )
        this.delConfirmed = false;
      }
    )
  }

}
