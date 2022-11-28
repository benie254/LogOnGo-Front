import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AdminComponent } from './admin.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { SummaryComponent } from './components/summary/summary.component';
import { AllAnnouncementsComponent } from './components/announcements/all-announcements/all-announcements.component';
import { AddAnnouncementComponent } from './components/announcements/add-announcement/add-announcement.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EditAnnouncementComponent } from './components/announcements/edit-announcement/edit-announcement.component';
import { AllContactsComponent } from './components/contacts/all-contacts/all-contacts.component';
import { EditContactComponent } from './components/contacts/edit-contact/edit-contact.component';
import { AllIncidentsComponent } from './components/incidents/all-incidents/all-incidents.component';
import { EditIncidentComponent } from './components/incidents/edit-incident/edit-incident.component';
import { AllFuelsComponent } from './components/fuels/all-fuels/all-fuels.component';
import { AddFuelComponent } from './components/fuels/add-fuel/add-fuel.component';
import { EditFuelComponent } from './components/fuels/edit-fuel/edit-fuel.component';
import { AllCreditCardLogsComponent } from './components/card-logs/all-credit-card-logs/all-credit-card-logs.component';
import { AddCreditCardLogComponent } from './components/card-logs/add-credit-card-log/add-credit-card-log.component';
import { EditCreditCardLogComponent } from './components/card-logs/edit-credit-card-log/edit-credit-card-log.component';
import { EditMpesaLogComponent } from './components/mpesa-logs/edit-mpesa-log/edit-mpesa-log.component';
import { AddMpesaLogComponent } from './components/mpesa-logs/add-mpesa-log/add-mpesa-log.component';
import { AllMpesaLogsComponent } from './components/mpesa-logs/all-mpesa-logs/all-mpesa-logs.component';
import { AllLogsComponent } from './components/logs/all-logs/all-logs.component';
import { AddLogComponent } from './components/logs/add-log/add-log.component';
import { EditLogComponent } from './components/logs/edit-log/edit-log.component';
import { EditFuelReceivedComponent } from './components/fuels-received/edit-fuel-received/edit-fuel-received.component';
import { AddFuelReceivedComponent } from './components/fuels-received/add-fuel-received/add-fuel-received.component';
import { AllFuelsReceivedComponent } from './components/fuels-received/all-fuels-received/all-fuels-received.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AdminComponent,
    AdminNavComponent,
    SummaryComponent,
    AllAnnouncementsComponent,
    AddAnnouncementComponent,
    EditAnnouncementComponent,
    AllContactsComponent,
    EditContactComponent,
    AllIncidentsComponent,
    EditIncidentComponent,
    AllFuelsComponent,
    AddFuelComponent,
    EditFuelComponent,
    AllCreditCardLogsComponent,
    AddCreditCardLogComponent,
    EditCreditCardLogComponent,
    EditMpesaLogComponent,
    AddMpesaLogComponent,
    AllMpesaLogsComponent,
    AllLogsComponent,
    AddLogComponent,
    EditLogComponent,
    EditFuelReceivedComponent,
    AddFuelReceivedComponent,
    AllFuelsReceivedComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
    AdminNavComponent,
    AdminComponent,
  ]
})
export class AdminModule { }
