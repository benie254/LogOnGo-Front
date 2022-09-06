import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule } from 'angular-notifier';

import { NotifierOptions } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FuelComponent } from './forms/fuel/fuel.component';
import { InitialUpdateComponent } from './forms/initial-update/initial-update/initial-update.component';
import { AddLogComponent } from './components/forms/add-log/add-log.component';
import { InitialAmountComponent } from './components/sections/initial-amount/initial-amount.component';
import { NewBalComponent } from './components/sections/new-bal/new-bal.component';
import { LogCardComponent } from './components/sections/log-card/log-card.component';
import { PricePerlitreComponent } from './components/sections/price-perlitre/price-perlitre.component';
import { NoLogsComponent } from './components/sections/no-logs/no-logs.component';
import { PetrolReceivedComponent } from './components/sections/petrol-received/petrol-received.component';
import { MpesaLogsComponent } from './components/sections/mpesa-logs/mpesa-logs.component';
import { NoMpesalogsComponent } from './components/sections/no-mpesalogs/no-mpesalogs.component';
import { AddMpesalogComponent } from './components/forms/add-mpesalog/add-mpesalog.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { AllLogsComponent } from './components/pages/all-logs/all-logs.component';
import { DieselLogsComponent } from './components/pages/diesel-logs/diesel-logs.component';
import { GasLogsComponent } from './components/pages/gas-logs/gas-logs.component';
import { DieselDetailsComponent } from './components/pages/diesel-details/diesel-details.component';
import { PetrolDetailsComponent } from './components/pages/petrol-details/petrol-details.component';
import { GasDetailsComponent } from './components/pages/gas-details/gas-details.component';
import { EmailReportComponent } from './components/pages/email-report/email-report.component';
import { EmailMpesareportComponent } from './components/pages/email-mpesareport/email-mpesareport.component';
import { IncidentComponent } from './components/pages/incident/incident.component';
import { AddLogpageComponent } from './components/pages/add-logpage/add-logpage.component';
import { MpesaLogdetailsComponent } from './components/pages/mpesa-logdetails/mpesa-logdetails.component';
import { PrintMpesaComponent } from './components/pages/print-mpesa/print-mpesa.component';
import { PrintLogsComponent } from './components/pages/print-logs/print-logs.component';
import { SearchResultsComponent } from './components/pages/search-results/search-results.component';
import { ProfileSidebarComponent } from './components/sections/profile-sidebar/profile-sidebar.component';
import { ProfileAnnouncementsComponent } from './components/sections/profile-announcements/profile-announcements.component';
import { ProfileNoannouncementsComponent } from './components/sections/profile-noannouncements/profile-noannouncements.component';
import { ProfileLogcardComponent } from './components/sections/profile-logcard/profile-logcard.component';
import { ProfileMpesalogsComponent } from './components/sections/profile-mpesalogs/profile-mpesalogs.component';
import { ProfileNompesalogsComponent } from './components/sections/profile-nompesalogs/profile-nompesalogs.component';
import { LoggingInstructionsComponent } from './components/sections/logging-instructions/logging-instructions.component';
import { PetrolReceivedFormComponent } from './components/forms/petrol-received-form/petrol-received-form.component';
import { DieselReceivedFormComponent } from './components/forms/diesel-received-form/diesel-received-form.component';
import { GasReceivedFormComponent } from './components/forms/gas-received-form/gas-received-form.component';
import { AddDieselLogformComponent } from './components/forms/add-diesel-logform/add-diesel-logform.component';
import { AddGasLogformComponent } from './components/forms/add-gas-logform/add-gas-logform.component';
import { LogdetailsLogcardComponent } from './components/sections/logdetails-logcard/logdetails-logcard.component';
import { DieselReceivedComponent } from './components/sections/diesel-received/diesel-received.component';
import { FuelReceivedInfoComponent } from './components/sections/fuel-received-info/fuel-received-info.component';
import { UpdateLogDetailsComponent } from './components/forms/update-log-details/update-log-details.component';
import { GasReceivedComponent } from './components/sections/gas-received/gas-received.component';
import { EmailMpesareportFormComponent } from './components/forms/email-mpesareport-form/email-mpesareport-form.component';
import { IncidentFormComponent } from './components/forms/incident-form/incident-form.component';
import { IncidentReportingInstructionsComponent } from './components/sections/incident-reporting-instructions/incident-reporting-instructions.component';
import { PriceperlitreUpdateFormComponent } from './components/forms/priceperlitre-update-form/priceperlitre-update-form.component';
import { BalFormComponent } from './components/forms/bal-form/bal-form.component';
import { LogService } from './services/log/log.service';
import { FuelService } from './services/fuel/fuel.service';
import { ProfileService } from './services/profile/profile.service';
import { NotificationService } from './services/notification/notification.service';
import { PumpsUpdateFormComponent } from './components/forms/pumps-update-form/pumps-update-form.component';
import { ContactFormComponent } from './components/forms/contact-form/contact-form.component';
import { AddComponent } from './add/add.component';
import { UserComponent } from './components/auth/user/user.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AdminComponent } from './components/auth/admin/admin.component';
import { ModeratorComponent } from './components/auth/moderator/moderator.component';
import { UsersComponent } from './components/auth/users/users.component';
import { authInterceptorProviders } from './helpers/auth/auth.interceptor';

import * as Notiflix from 'notiflix';
import { NgPasswordValidatorModule, NgPasswordValidatorOptions } from 'ng-password-validator';

const notifierDefaultOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 24,
    },
    vertical: {
      position: 'top',
      distance: 6,
      gap: 5,
    },
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4,
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 50,
      easing: 'ease',
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50,
    },
    shift: {
      speed: 300,
      easing: 'ease',
    },
    overlap: 150,
  },
};

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
    AppComponent,
    HomeComponent,
    NavComponent,
    FuelComponent,
    InitialUpdateComponent,
    AddLogComponent,
    InitialAmountComponent,
    NewBalComponent,
    LogCardComponent,
    PricePerlitreComponent,
    NoLogsComponent,
    PetrolReceivedComponent,
    MpesaLogsComponent,
    NoMpesalogsComponent,
    AddMpesalogComponent,
    ProfileComponent,
    AllLogsComponent,
    DieselLogsComponent,
    GasLogsComponent,
    DieselDetailsComponent,
    PetrolDetailsComponent,
    GasDetailsComponent,
    EmailReportComponent,
    EmailMpesareportComponent,
    IncidentComponent,
    AddLogpageComponent,
    MpesaLogdetailsComponent,
    PrintMpesaComponent,
    PrintLogsComponent,
    SearchResultsComponent,
    ProfileSidebarComponent,
    ProfileAnnouncementsComponent,
    ProfileNoannouncementsComponent,
    ProfileLogcardComponent,
    ProfileMpesalogsComponent,
    ProfileNompesalogsComponent,
    LoggingInstructionsComponent,
    PetrolReceivedFormComponent,
    DieselReceivedFormComponent,
    GasReceivedFormComponent,
    AddDieselLogformComponent,
    AddGasLogformComponent,
    LogdetailsLogcardComponent,
    DieselReceivedComponent,
    FuelReceivedInfoComponent,
    UpdateLogDetailsComponent,
    GasReceivedComponent,
    EmailMpesareportFormComponent,
    IncidentFormComponent,
    IncidentReportingInstructionsComponent,
    PriceperlitreUpdateFormComponent,
    BalFormComponent,
    PumpsUpdateFormComponent,
    ContactFormComponent,
    AddComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ModeratorComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NotifierModule.withConfig(
      notifierDefaultOptions,
    ),
    NgPasswordValidatorModule.forRoot(MyDefaultOptions as NgPasswordValidatorOptions),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
