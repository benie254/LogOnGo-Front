import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentsRoutingModule } from './incidents-routing.module';
import { AllIncidentsComponent } from './all-incidents/all-incidents.component';
import { EditIncidentComponent } from './edit-incident/edit-incident.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AllIncidentsComponent,
    EditIncidentComponent
  ],
  imports: [
    CommonModule,
    IncidentsRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
    AllIncidentsComponent,
  ]
})
export class IncidentsModule { }
