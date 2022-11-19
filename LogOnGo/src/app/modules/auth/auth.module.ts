import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { AppModule } from 'src/app/app.module';
import { NgPasswordValidatorOptions,NgPasswordValidatorModule } from 'ng-password-validator';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RootModule } from '../root/root.module';
import { RegFormComponent } from './forms/reg-form/reg-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { ChangePassFormComponent } from './forms/change-pass-form/change-pass-form.component';
import { ResetConfirmedFormComponent } from './forms/reset-confirmed-form/reset-confirmed-form.component';
import { ResetRequestFormComponent } from './forms/reset-request-form/reset-request-form.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ResetConfirmedComponent } from './components/reset-confirmed/reset-confirmed.component';
import { AuthService } from './services/auth/auth.service';

export const MyDefaultOptions: NgPasswordValidatorOptions = {
  placement: "right",
  rules: {
      'password': {
          'type': "number",
          'min': 6,
          'max': 15,
      },
      "include-symbol": true,
      "include-number": true,
      "include-lowercase-characters": true,
      "include-uppercase-characters": true,
  }
};

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ResetConfirmedComponent,
    ChangePasswordComponent,
    RegFormComponent,
    LoginFormComponent,
    ChangePassFormComponent,
    ResetConfirmedFormComponent,
    ResetRequestFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgPasswordValidatorModule.forRoot(MyDefaultOptions as NgPasswordValidatorOptions),
    RootModule,
  ],
})
export class AuthModule { }
