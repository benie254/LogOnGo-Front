import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['',Validators['email']],
      employee_id: ['',Validators['required']],
      password: ['',Validators['required']],
    });
  }

  submit(): void {
    this.http.post('https://logongo.herokuapp.com/api/login', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe(() => {
      Notiflix.Notify.success('Login successful! Welcome.');
      this.router.navigate(['home'])
    },
    err => {
      Notiflix.Notify.failure('Login failed!');
      Notiflix.Notify.warning('Some of your details may be incorrect.');
      if (this.form.invalid) {
        Notiflix.Notify.failure('Login failed!');
        Notiflix.Notify.warning('Some of your details may be null, incomplete or incorrect.');
      }
    });
  }

  // reloadPage(): void {
  //   window.location.reload();
  // }

}
