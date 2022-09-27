import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminComponent } from './components/auth/admin/admin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AddMpesalogComponent } from './components/forms/add-mpesalog/add-mpesalog.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { AddLogpageComponent } from './components/pages/add-logpage/add-logpage.component';
import { AddMpesaLogpageComponent } from './components/pages/add-mpesa-logpage/add-mpesa-logpage.component';
import { AllLogsComponent } from './components/pages/all-logs/all-logs.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DieselDetailsComponent } from './components/pages/diesel-details/diesel-details.component';
import { DieselLogsComponent } from './components/pages/diesel-logs/diesel-logs.component';
import { EmailMpesareportComponent } from './components/pages/email-mpesareport/email-mpesareport.component';
import { EmailReportComponent } from './components/pages/email-report/email-report.component';
import { GasDetailsComponent } from './components/pages/gas-details/gas-details.component';
import { GasLogsComponent } from './components/pages/gas-logs/gas-logs.component';
import { IncidentComponent } from './components/pages/incident/incident.component';
import { LogDetailsComponent } from './components/pages/log-details/log-details.component';
import { MpesaLogdetailsComponent } from './components/pages/mpesa-logdetails/mpesa-logdetails.component';
import { PetrolDetailsComponent } from './components/pages/petrol-details/petrol-details.component';
import { PetrolLogsComponent } from './components/pages/petrol-logs/petrol-logs.component';
import { PrintLogsComponent } from './components/pages/print-logs/print-logs.component';
import { PrintMpesaComponent } from './components/pages/print-mpesa/print-mpesa.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'petrol/:id', component: PetrolLogsComponent },
  { path: 'diesel/:id', component: DieselLogsComponent },
  { path: 'gas/:id', component: GasLogsComponent },
  { path: 'log-details/:id', component: LogDetailsComponent },
  { path: 'mpesa-details/:id', component: MpesaLogdetailsComponent },
  { path: 'petrol-details/:id', component: PetrolDetailsComponent },
  { path: 'diesel-details/:id', component: DieselDetailsComponent },
  { path: 'gas-details/:id', component: GasDetailsComponent },
  { path: 'logs', component: AllLogsComponent },
  { path: 'add-log', component: AddLogpageComponent },
  { path: 'add-mpesa', component: AddMpesaLogpageComponent },
  { path: 'incident', component: IncidentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'print-report/:id', component: PrintLogsComponent },
  { path: 'email-report/:id', component: EmailReportComponent },
  { path: 'mpesa-report/:id', component: PrintMpesaComponent },
  { path: 'email-mpesa-report/:id', component: EmailMpesareportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
