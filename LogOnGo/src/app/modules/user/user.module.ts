import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { IncidentComponent } from './incident/incident.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileAnnouncementsComponent } from './profile-announcements/profile-announcements.component';
import { ProfileNoAnnouncementsComponent } from './profile-no-announcements/profile-no-announcements.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { IncidentFormComponent } from './forms/incident-form/incident-form.component';
import { IncidentInstructionsComponent } from './components/incident-instructions/incident-instructions.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CardModule } from '../card/card.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LogModule } from '../log/log.module';
import { MpesaModule } from '../mpesa/mpesa.module';
import { AuthModule } from '../auth/auth.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxEditorModule } from 'ngx-editor';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    UserComponent,
    IncidentComponent,
    ContactComponent,
    ProfileComponent,
    ProfileAnnouncementsComponent,
    ProfileNoAnnouncementsComponent,
    ContactFormComponent,
    IncidentFormComponent,
    IncidentInstructionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgxEditorModule,
    UserRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CardModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    LogModule,
    MpesaModule,
    AuthModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class UserModule { }
