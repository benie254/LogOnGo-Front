import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginComponent } from './components/login/login.component';
import { ResetConfirmedComponent } from './components/reset-confirmed/reset-confirmed.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'success/welcome/:id', component: HomeComponent },
  { path: 'user/:id/change/password/:id', component: ChangePasswordComponent, },
  { path: 'user/:id/reset/password/request', component: ResetPasswordComponent,},
  { path: 'confirmed/password/reset/:id', component: ResetConfirmedComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
