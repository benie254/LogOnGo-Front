import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CreditCardService } from 'src/app/services/card/credit-card.service';  

@Component({
  selector: 'app-credit-details',
  templateUrl: './credit-details.component.html',
  styleUrls: ['./credit-details.component.css']
})
export class CreditDetailsComponent implements OnInit {
  creditCardUpdateForm: FormGroup;
  creditCardDetails: any; 
  id: number;
  creditCardDetailsForm: FormGroup;
  currentUser = this.authService.currentUserValue;
  closed: boolean = false;
  updateConfirmed: boolean = false;
  date = '';
  
 error: any;
 message = '';

 


  constructor(
    private creditCardService:CreditCardService,
    private route:ActivatedRoute,
    private authService:AuthService,
    private fb:FormBuilder,
  ) { 

    if(this.date){
      alert(this.date)
    } else {
      alert("no date")
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => this.getCreditCardLogDetails(params['id']));
    // this.date = this.creditCardDetails.date
    
    this.creditCardUpdateForm = this.fb.group({
      date: [this.date, [Validators.required]],
        card_name: ['', [Validators.required]],
        card_number: [0, [Validators['required'],Validators['min'](1000000000000000),Validators['max'](9999999999999999)]],
        amount: [0, [Validators.required]],
    });
    this.getCreditCardLogDetails(this.id)
    // this.updateForm = this.fb.group({
    //   date: ['', [Validators.required]],
    //   card_name: ['', [Validators.required]],
    //   card_number: [0, [Validators['required'],Validators['min'](1000000000000000),Validators['max'](9999999999999999)]],
    //   amount: [0, [Validators.required]],
    // });
    
  }


  getCreditCardLogDetails(id:number){
    this.creditCardService.getCreditCardLogDetails(id).subscribe(
      (data) => {
        this.creditCardDetails = data
        console.warn("creditCard log details",data)
        Notiflix.Notify.success('Get creditCard details success')
        this.date = this.creditCardDetails.date
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

  

  updateCreditCardDetails(){

    this.creditCardService.updateCreditCardDetails(this.id,this.creditCardUpdateForm.value).subscribe({
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
