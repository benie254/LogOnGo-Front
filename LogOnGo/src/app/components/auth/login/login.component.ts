import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { first } from 'rxjs/operators';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authenticated: boolean = false;
  err: any;
  errMessage = '';
  

  form: FormGroup;
  loading = false;

  matcher = new MyErrorStateMatcher();

  constructor(
    private authService:AuthService,
  ) {
    if (this.authService.currentUserValue) {
      this.authenticated = true;
    }
  }

  ngOnInit(): void { }
  
  submit(userData): void {
    this.loading = true;
    Notiflix.Loading.hourglass('Processing, please wait...');
    this.authService.login(userData).pipe(
      first()
      ).subscribe(
        data => {
          Notiflix.Loading.remove();
                  // this.router.navigate(['/']);
                  Notiflix.Notify.success('Login successful! Welcome.');
                  location.reload();
                  this.authenticated = true;
                },
                error => {
                  Notiflix.Loading.remove();
                  this.loading = false;
                  console.warn(error)
                  this.err = error
                  this.errMessage = this.err.error.detail
                  Notiflix.Report.failure(
                    'Login failed.',
                    this.errMessage,
                    'Retry',
                  );
                  if (this.form.invalid){
                                Notiflix.Report.failure(
                                  'Login failed.',
                                  this.errMessage,
                                  'Retry',
                                );
                  }
                });
    }
}
