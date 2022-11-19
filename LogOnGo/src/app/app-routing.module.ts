import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResetConfirmedComponent } from './components/auth/reset-confirmed/reset-confirmed.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { AddCreditLogpageComponent } from './components/pages/add-credit-logpage/add-credit-logpage.component';
import { AddLogpageComponent } from './components/pages/add-logpage/add-logpage.component';
import { AddMpesaLogpageComponent } from './components/pages/add-mpesa-logpage/add-mpesa-logpage.component';
import { AllLogsComponent } from './components/pages/all-logs/all-logs.component';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DieselLogsComponent } from './components/pages/diesel-logs/diesel-logs.component';
import { EmailMpesareportComponent } from './components/pages/email-mpesareport/email-mpesareport.component';
import { EmailReportComponent } from './components/pages/email-report/email-report.component';
import { GasLogsComponent } from './components/pages/gas-logs/gas-logs.component';
import { IncidentComponent } from './components/pages/incident/incident.component';
import { LogDetailsComponent } from './components/pages/log-details/log-details.component';
import { MpesaLogdetailsComponent } from './components/pages/mpesa-logdetails/mpesa-logdetails.component';
import { PetrolLogsComponent } from './components/pages/petrol-logs/petrol-logs.component';
import { PrintLogsComponent } from './components/pages/print-logs/print-logs.component';
import { PrintMpesaComponent } from './components/pages/print-mpesa/print-mpesa.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SearchResultsComponent } from './components/pages/search-results/search-results.component';
import { DeleteCardComponent } from './components/sections-b/delete-card/delete-card.component';
import { DeleteMpesaComponent } from './components/sections-b/delete-mpesa/delete-mpesa.component';
import { CreditDetailsComponent } from './components/sections-b/credit-details/credit-details.component';
import { DeleteLogComponent } from './components/sections-b/delete-log/delete-log.component';
import { EmailCreditCardComponent } from './components/sections-b/email-credit-card/email-credit-card.component';
import { PrintCreditCardComponent } from './components/sections-b/print-credit-card/print-credit-card.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'petrol/:id', component: PetrolLogsComponent },
  { path: 'diesel/:id', component: DieselLogsComponent },
  { path: 'gas/:id', component: GasLogsComponent },
  { path: 'log-details/:id', component: LogDetailsComponent },
  { path: 'mpesa-details/:id', component: MpesaLogdetailsComponent },
  { path: 'credit-card-details/:id', component: CreditDetailsComponent },
  // { path: 'logs', component: AllLogsComponent },
  { path: 'add-log', component: AddLogpageComponent },
  { path: 'add-mpesa', component: AddMpesaLogpageComponent },
  // { path: 'add-credit-card', component: AddCreditLogpageComponent },
  { path: 'incident', component: IncidentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'print-report/:id', component: PrintLogsComponent },
  { path: 'email-report/:id', component: EmailReportComponent },
  { path: 'mpesa-report/:id', component: PrintMpesaComponent },
  { path: 'email-mpesa-report/:id', component: EmailMpesareportComponent },
  { path: 'credit-card-report/:id', component: PrintCreditCardComponent },
  { path: 'email-credit-card-report/:id', component: EmailCreditCardComponent },
  { path: 'search', component: SearchResultsComponent },
  { path: 'change-password/:id', component: ChangePasswordComponent },
  { path: 'reset-password/:id', component: ResetPasswordComponent },
  { path: 'confirmed/reset-password/:id', component: ResetConfirmedComponent },
  { path: 'delete-log/:id', component: DeleteLogComponent },
  { path: 'delete-card/:id', component: DeleteCardComponent },
  { path: 'delete-mpesa/:id', component: DeleteMpesaComponent },
  { path: 'errors', loadChildren: () => import('./modules/errors/errors.module').then(m => m.ErrorsModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'root', loadChildren: () => import('./modules/root/root.module').then(m => m.RootModule) },
  { path: 'navigation', loadChildren: () => import('./modules/navigation/navigation.module').then(m => m.NavigationModule) },
  { path: 'services', loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule) },
  { path: 'cards', loadChildren: () => import('./modules/card/card.module').then(m => m.CardModule) },
  { path: 'logs', loadChildren: () => import('./modules/log/log.module').then(m => m.LogModule) },
  { path: 'mpesa', loadChildren: () => import('./modules/mpesa/mpesa.module').then(m => m.MpesaModule) },
  { path: 'fuel', loadChildren: () => import('./modules/fuel/fuel.module').then(m => m.FuelModule) },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
