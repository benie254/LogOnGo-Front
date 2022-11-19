import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FuelComponent } from './forms/fuel/fuel.component';
import { AddLogComponent } from './components/forms/add-log/add-log.component';
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
import { EmailReportComponent } from './components/pages/email-report/email-report.component';
import { EmailMpesareportComponent } from './components/pages/email-mpesareport/email-mpesareport.component';
import { IncidentComponent } from './components/pages/incident/incident.component';
import { AddLogpageComponent } from './components/pages/add-logpage/add-logpage.component';
import { MpesaLogdetailsComponent } from './components/pages/mpesa-logdetails/mpesa-logdetails.component';
import { PrintMpesaComponent } from './components/pages/print-mpesa/print-mpesa.component';
import { PrintLogsComponent } from './components/pages/print-logs/print-logs.component';
import { SearchResultsComponent } from './components/pages/search-results/search-results.component';
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
import { GasReceivedComponent } from './components/sections/gas-received/gas-received.component';
import { EmailMpesareportFormComponent } from './components/forms/email-mpesareport-form/email-mpesareport-form.component';
import { IncidentFormComponent } from './components/forms/incident-form/incident-form.component';
import { IncidentReportingInstructionsComponent } from './components/sections/incident-reporting-instructions/incident-reporting-instructions.component';
import { LogService } from './services/log/log.service';
import { FuelService } from './services/fuel/fuel.service';
import { ProfileService } from './services/profile/profile.service';
import { ContactFormComponent } from './components/forms/contact-form/contact-form.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthInterceptor } from './helpers/auth/auth.interceptor';

import * as Notiflix from 'notiflix';
import { NgPasswordValidatorModule, NgPasswordValidatorOptions } from 'ng-password-validator';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule } from '@angular/router';
import { PetrolLogsComponent } from './components/pages/petrol-logs/petrol-logs.component';


import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatHint} from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import 'hammerjs';

import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LogDetailsComponent } from './components/pages/log-details/log-details.component';
import { FuelReceivedComponent } from './components/sections/fuel-received/fuel-received.component';
import { AddPetrolPumpOneComponent } from './components/sections/add-petrol-pump-one/add-petrol-pump-one.component';
import { AddPetrolPumpTwoComponent } from './components/sections/add-petrol-pump-two/add-petrol-pump-two.component';
import { AddPetrolPumpThreeComponent } from './components/sections/add-petrol-pump-three/add-petrol-pump-three.component';
import { AddPetrolPumpFourComponent } from './components/sections/add-petrol-pump-four/add-petrol-pump-four.component';
import { PetrolPumpOneComponent } from './components/sections/petrol-pump-one/petrol-pump-one.component';
import { PetrolPumpTwoComponent } from './components/sections/petrol-pump-two/petrol-pump-two.component';
import { PetrolPumpThreeComponent } from './components/sections/petrol-pump-three/petrol-pump-three.component';
import { PetrolPumpFourComponent } from './components/sections/petrol-pump-four/petrol-pump-four.component';
import { DieselPumpFourComponent } from './components/sections/diesel-pump-four/diesel-pump-four.component';
import { DieselPumpThreeComponent } from './components/sections/diesel-pump-three/diesel-pump-three.component';
import { DieselPumpTwoComponent } from './components/sections/diesel-pump-two/diesel-pump-two.component';
import { DieselPumpOneComponent } from './components/sections/diesel-pump-one/diesel-pump-one.component';
import { AddDieselPumpFourComponent } from './components/sections/add-diesel-pump-four/add-diesel-pump-four.component';
import { AddDieselPumpThreeComponent } from './components/sections/add-diesel-pump-three/add-diesel-pump-three.component';
import { AddDieselPumpTwoComponent } from './components/sections/add-diesel-pump-two/add-diesel-pump-two.component';
import { AddDieselPumpOneComponent } from './components/sections/add-diesel-pump-one/add-diesel-pump-one.component';
import { AddGasPumpOneComponent } from './components/sections/add-gas-pump-one/add-gas-pump-one.component';
import { AddGasPumpTwoComponent } from './components/sections/add-gas-pump-two/add-gas-pump-two.component';
import { AddGasPumpThreeComponent } from './components/sections/add-gas-pump-three/add-gas-pump-three.component';
import { AddGasPumpFourComponent } from './components/sections/add-gas-pump-four/add-gas-pump-four.component';
import { GasPumpOneComponent } from './components/sections/gas-pump-one/gas-pump-one.component';
import { GasPumpTwoComponent } from './components/sections/gas-pump-two/gas-pump-two.component';
import { GasPumpThreeComponent } from './components/sections/gas-pump-three/gas-pump-three.component';
import { GasPumpFourComponent } from './components/sections/gas-pump-four/gas-pump-four.component';
import { AddMpesaLogpageComponent } from './components/pages/add-mpesa-logpage/add-mpesa-logpage.component';
import { AddMpesaLogComponent } from './components/sections/add-mpesa-log/add-mpesa-log.component';
import { MpesaLoggingInstructionsComponent } from './components/sections/mpesa-logging-instructions/mpesa-logging-instructions.component';
import { AllLogsCardComponent } from './components/sections/all-logs-card/all-logs-card.component';
import { AllMpesaCardComponent } from './components/sections/all-mpesa-card/all-mpesa-card.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutComponent } from './components/sections-b/about/about/about.component';
import { UsingComponent } from './components/sections-b/using/using/using.component';
import { SettingComponent } from './components/sections-b/setting/setting/setting.component';
import { PetrolSummaryComponent } from './components/sections-b/petrol-summary/petrol-summary.component';
import { DieselSummaryComponent } from './components/sections-b/diesel-summary/diesel-summary.component';
import { GasSummaryComponent } from './components/sections-b/gas-summary/gas-summary.component';
import { FooterProfileComponent } from './components/sections/footer-profile/footer-profile.component';
import { NgxEditorModule } from 'ngx-editor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BindQueryParamDirective } from './directives/queryParams/bind-query-param.directive';
import { DieselMpesaComponent } from './components/sections/diesel-mpesa/diesel-mpesa.component';
import { DieselNoMpesaComponent } from './components/sections/diesel-no-mpesa/diesel-no-mpesa.component';
import { GasNoMpesaComponent } from './components/sections/gas-no-mpesa/gas-no-mpesa.component';
import { GasMpesaComponent } from './components/sections/gas-mpesa/gas-mpesa.component';
import { CreditCardLogsComponent } from './components/sections-b/credit-card-logs/credit-card-logs.component';
import { NoCreditCardComponent } from './components/sections-b/no-credit-card/no-credit-card.component';
import { CreditCardDieselComponent } from './components/sections-b/credit-card-diesel/credit-card-diesel.component';
import { CreditCardGasComponent } from './components/sections-b/credit-card-gas/credit-card-gas.component';
import { CreditLogCardComponent } from './components/sections-b/credit-log-card/credit-log-card.component';
import { NoCreditDieselComponent } from './components/sections-b/no-credit-diesel/no-credit-diesel.component';
import { NoCreditGasComponent } from './components/sections-b/no-credit-gas/no-credit-gas.component';
import { CreditDetailsComponent } from './components/sections-b/credit-details/credit-details.component';
import { PrintCreditCardComponent } from './components/sections-b/print-credit-card/print-credit-card.component';
import { EmailCreditCardComponent } from './components/sections-b/email-credit-card/email-credit-card.component';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { ResetConfirmedComponent } from './components/auth/reset-confirmed/reset-confirmed.component';
import { AllCreditLogsComponent } from './components/sections-b/all-credit-logs/all-credit-logs.component';
import { ProfileCreditLogsComponent } from './components/sections-b/profile-credit-logs/profile-credit-logs.component';
import { AddCreditLogpageComponent } from './components/pages/add-credit-logpage/add-credit-logpage.component';
import { AddCreditCardFormComponent } from './components/forms/add-credit-card-form/add-credit-card-form.component';
import { AddDieselCreditFormComponent } from './components/forms/add-diesel-credit-form/add-diesel-credit-form.component';
import { AddGasCreditFormComponent } from './components/forms/add-gas-credit-form/add-gas-credit-form.component';
import { DeleteLogComponent } from './components/sections-b/delete-log/delete-log.component';
import { DeleteMpesaComponent } from './components/sections-b/delete-mpesa/delete-mpesa.component';
import { DeleteCardComponent } from './components/sections-b/delete-card/delete-card.component';
import { FooterComponent } from './components/sections/footer/footer.component';
import { ErrorsModule } from './modules/errors/errors.module';
import { AuthModule } from './modules/auth/auth.module';
import { ServicesModule } from './modules/services/services.module';
import { AllFormsModule } from './modules/all-forms/all-forms.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FuelComponent,
    AddLogComponent,
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
    EmailReportComponent,
    EmailMpesareportComponent,
    IncidentComponent,
    AddLogpageComponent,
    MpesaLogdetailsComponent,
    PrintMpesaComponent,
    PrintLogsComponent,
    SearchResultsComponent,
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
    GasReceivedComponent,
    EmailMpesareportFormComponent,
    IncidentFormComponent,
    IncidentReportingInstructionsComponent,
    ContactFormComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    PetrolLogsComponent,
    LogDetailsComponent,
    FuelReceivedComponent,
    AddPetrolPumpOneComponent,
    AddPetrolPumpTwoComponent,
    AddPetrolPumpThreeComponent,
    AddPetrolPumpFourComponent,
    PetrolPumpOneComponent,
    PetrolPumpTwoComponent,
    PetrolPumpThreeComponent,
    PetrolPumpFourComponent,
    DieselPumpFourComponent,
    DieselPumpThreeComponent,
    DieselPumpTwoComponent,
    DieselPumpOneComponent,
    AddDieselPumpFourComponent,
    AddDieselPumpThreeComponent,
    AddDieselPumpTwoComponent,
    AddDieselPumpOneComponent,
    AddGasPumpOneComponent,
    AddGasPumpTwoComponent,
    AddGasPumpThreeComponent,
    AddGasPumpFourComponent,
    GasPumpOneComponent,
    GasPumpTwoComponent,
    GasPumpThreeComponent,
    GasPumpFourComponent,
    AddMpesaLogpageComponent,
    AddMpesaLogComponent,
    MpesaLoggingInstructionsComponent,
    AllLogsCardComponent,
    AllMpesaCardComponent,
    ContactComponent,
    AboutComponent,
    UsingComponent,
    SettingComponent,
    PetrolSummaryComponent,
    DieselSummaryComponent,
    GasSummaryComponent,
    FooterProfileComponent,
    BindQueryParamDirective,
    DieselMpesaComponent,
    DieselNoMpesaComponent,
    GasNoMpesaComponent,
    GasMpesaComponent,
    CreditCardLogsComponent,
    NoCreditCardComponent,
    CreditCardDieselComponent,
    CreditCardGasComponent,
    CreditLogCardComponent,
    NoCreditDieselComponent,
    NoCreditGasComponent,
    CreditDetailsComponent,
    PrintCreditCardComponent,
    EmailCreditCardComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    ResetConfirmedComponent,
    AllCreditLogsComponent,
    ProfileCreditLogsComponent,
    AddCreditLogpageComponent,
    AddCreditCardFormComponent,
    AddDieselCreditFormComponent,
    AddGasCreditFormComponent,
    DeleteLogComponent,
    DeleteMpesaComponent,
    DeleteCardComponent,
    FooterComponent,
    MpesaLoggingInstructionsComponent,
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NoopAnimationsModule,
    ErrorsModule,
    AuthModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgxEditorModule,
    Ng2SearchPipeModule,
    MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule,
      MatExpansionModule,
      MatPaginatorModule,
      MatProgressBarModule,
      ServicesModule,
      AllFormsModule,

  ],
  exports:[
    FooterComponent,
    MpesaLoggingInstructionsComponent,
    LandingComponent,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,  useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
