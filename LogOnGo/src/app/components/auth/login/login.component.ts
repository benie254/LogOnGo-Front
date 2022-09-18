import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService:AuthService,
  ) {
    // if (this.authService.currentUserValue) {
    //   this.router.navigate(['home']);
  // }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['',Validators['email']],
      employee_id: ['',Validators['required']],
      password: ['',Validators['required']],
    });
  }

  get f() { return this.form.controls; }

  submit(): void {
    this.loading = true;
    if (this.form.invalid){
      Notiflix.Notify.failure('Login failed!');
      Notiflix.Notify.warning('Some of your details may be null, incomplete or incorrect.');;
    }
    this.authService.login(this.f['email'].value,this.f['employee_id'].value,this.f['password'].value).pipe(
      first()
      ).subscribe(
        data => {
                  this.router.navigate(['']);
                  Notiflix.Notify.success('Login successful! Welcome.');
                },
                error => {
                  Notiflix.Notify.failure('Login failed!');
                  this.loading = false;
                  Notiflix.Notify.warning('Some of your details may be incorrect.');
                });
    }
    // this.http.post('https://logongo.herokuapp.com/api/login/', this.form.getRawValue(), {
    //   // withCredentials: true
    // }).subscribe(() => {
    //   this.router.navigate(['']);
    //   Notiflix.Notify.success('Login successful! Welcome.');
    // },
    // err => {
    //   Notiflix.Notify.failure('Login failed!');
    //   Notiflix.Notify.warning('Some of your details may be incorrect.');
    //   if (this.form.invalid) {
    //     Notiflix.Notify.failure('Login failed!');
    //     Notiflix.Notify.warning('Some of your details may be null, incomplete or incorrect.');
    //   }
    // });
  // }

  // reloadPage(): void {
  //   window.location.reload();
  // }

}
