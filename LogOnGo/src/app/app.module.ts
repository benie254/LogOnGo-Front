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
import { PagesComponent } from './components/pages/pages.component';
import { InitialAmountComponent } from './components/sections/initial-amount/initial-amount.component';
import { PumpsComponent } from './components/sections/pumps/pumps.component';
import { NewBalComponent } from './components/sections/new-bal/new-bal.component';
import { LogCardComponent } from './components/sections/log-card/log-card.component';
import { PricePerlitreComponent } from './components/sections/price-perlitre/price-perlitre.component';
import { NoLogsComponent } from './components/sections/no-logs/no-logs.component';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FuelComponent,
    InitialUpdateComponent,
    AddLogComponent,
    PagesComponent,
    InitialAmountComponent,
    PumpsComponent,
    NewBalComponent,
    LogCardComponent,
    PricePerlitreComponent,
    NoLogsComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
