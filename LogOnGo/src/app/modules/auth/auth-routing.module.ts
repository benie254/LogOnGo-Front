import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../navigation/landing/landing.component';
import { AuthComponent } from './auth.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { 
    path: '', redirectTo: 'login', pathMatch: 'full', 
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'login/success', component: LandingComponent,
  },
  // { path: 'register', component: RegisterComponent, },
  // { path: 'change-password/:id', component: ChangePasswordComponent, },
  // { path: 'request/reset-password/:id', component: ResetPasswordComponent, },
  // { path: 'reset-password/confirmed/:id', component: ResetConfirmedComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
