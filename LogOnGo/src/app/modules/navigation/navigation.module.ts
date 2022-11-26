import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FuelSummaryComponent } from './fuel-summary/fuel-summary.component';
import { SettingUpComponent } from './setting-up/setting-up.component';
import { UsingLogongoComponent } from './using-logongo/using-logongo.component';
import { MatIconModule } from '@angular/material/icon';
import { DieselSummaryComponent } from './diesel-summary/diesel-summary.component';
import { GasSummaryComponent } from './gas-summary/gas-summary.component';
import { PetrolSummaryComponent } from './petrol-summary/petrol-summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    LandingComponent,
    NavbarComponent,
    AboutComponent,
    FuelSummaryComponent,
    SettingUpComponent,
    UsingLogongoComponent,
    DieselSummaryComponent,
    GasSummaryComponent,
    PetrolSummaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavigationRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  ]
})
export class NavigationModule { }
