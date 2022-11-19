import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { IncidentComponent } from './incident/incident.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileAnnouncementsComponent } from './profile-announcements/profile-announcements.component';
import { ProfileNoAnnouncementsComponent } from './profile-no-announcements/profile-no-announcements.component';


@NgModule({
  declarations: [
    UserComponent,
    IncidentComponent,
    ContactComponent,
    ProfileComponent,
    ProfileAnnouncementsComponent,
    ProfileNoAnnouncementsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
