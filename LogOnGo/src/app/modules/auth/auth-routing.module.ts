import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../navigation/landing/landing.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetConfirmedComponent } from './components/reset-confirmed/reset-confirmed.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


const routes: Routes = [
  { 
    path: '', redirectTo: 'login', pathMatch: 'full', 
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'welcome/:id', component: LandingComponent,
  },
  { path: 'register', component: RegisterComponent, },
  { path: 'change/password/:id', component: ChangePasswordComponent, },
  { path: 'reset/password/request', component: ResetPasswordComponent,},
  { path: 'confirmed/password/reset/:id', component: ResetConfirmedComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
