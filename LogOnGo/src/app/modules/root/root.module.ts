import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    RootComponent,
    FooterComponent,
    HomeComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule
  ],
  exports: [
    FooterComponent,
    HomeComponent,
    LandingComponent,
  ]
})
export class RootModule { }
