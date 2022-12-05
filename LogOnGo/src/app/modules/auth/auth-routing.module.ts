import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../navigation/home/home.component';
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
    path: 'welcome/:id', component: HomeComponent,
  },
  { path: 'register', component: RegisterComponent, },
  { path: 'change/password', component: ChangePasswordComponent, },
  { path: 'reset/password/request', component: ResetPasswordComponent,},
  { path: 'confirmed/password/reset/:id', component: ResetConfirmedComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
