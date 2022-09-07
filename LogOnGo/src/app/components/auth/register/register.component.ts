import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgPasswordValidatorOptions } from 'ng-password-validator';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  username: any;
  

  constructor(
    private formBuilder:FormBuilder, private http:HttpClient, private router:Router
    ) { }

    options: NgPasswordValidatorOptions = {
      placement: 'bottom',
      type: 'inline',
      'custom-class': 'custom-class',
      rules: {
        'password': {
            'type': "range",
            'min': 8,
            'max': 25,
        },
        "include-symbol": true,
        "include-number": true,
        "include-lowercase-characters": true,
        "include-uppercase-characters": true,
      },
      shadow: true,
      offset: 15,
    };
  
    isValid(event: boolean): void {
      console.log(event);
    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['',Validators['required'], Validators['min'](4), Validators['maxLength'](60)],
      email: ['',Validators['email']],
      employee_id: ['',Validators['required']],
      first_name: ['',Validators.required, Validators.minLength(3),],
      last_name: ['',Validators.required, Validators.minLength(3),],
      petrol_station: ['',Validators.required, Validators.minLength(7),],
      password: ['',Validators.required]
    });
  }
  submit(): void {
    this.http.post('http://127.0.0.1:8000/api/register', this.form.getRawValue())
      .subscribe(() => {
        Notiflix.Notify.success('Registration successful!');
        this.router.navigate(['/login']);
      },
      err => {
        Notiflix.Notify.failure('Registration failed!');
        Notiflix.Notify.warning('Some of your details may be incorrect.');
        if (this.form.invalid) {
          Notiflix.Notify.warning('Some of your details may be null or incorrect.');
        }
      });  
  }


}
