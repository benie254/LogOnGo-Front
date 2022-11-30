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
import { AuthInterceptor } from './helpers/auth/auth.interceptor';

import * as Notiflix from 'notiflix';
import { NgPasswordValidatorModule, NgPasswordValidatorOptions } from 'ng-password-validator';
import { RouterModule } from '@angular/router';


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
import { NgxEditorModule } from 'ngx-editor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BindQueryParamDirective } from './directives/queryParams/bind-query-param.directive';
import { ErrorsModule } from './modules/errors/errors.module';
import { AuthModule } from './modules/auth/auth.module';
import { NavigationModule } from './modules/navigation/navigation.module';



@NgModule({
  declarations: [
    AppComponent,
    BindQueryParamDirective,
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
      NavigationModule,

  ],
  exports:[
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,  useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
