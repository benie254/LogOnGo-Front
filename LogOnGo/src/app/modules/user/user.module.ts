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
    UserRoutingModule
  ]
})
export class UserModule { }
