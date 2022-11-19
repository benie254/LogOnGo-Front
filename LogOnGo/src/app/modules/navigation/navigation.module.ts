import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FuelSummaryComponent } from './fuel-summary/fuel-summary.component';
import { SettingUpComponent } from './setting-up/setting-up.component';
import { UsingLogongoComponent } from './using-logongo/using-logongo.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    LandingComponent,
    NavbarComponent,
    AboutComponent,
    FuelSummaryComponent,
    SettingUpComponent,
    UsingLogongoComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    MatIconModule,
  ]
})
export class NavigationModule { }
