import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuelsReceivedRoutingModule } from './fuels-received-routing.module';
import { AddFuelReceivedComponent } from './add-fuel-received/add-fuel-received.component';
import { AllFuelsReceivedComponent } from './all-fuels-received/all-fuels-received.component';
import { EditFuelReceivedComponent } from './edit-fuel-received/edit-fuel-received.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AddFuelReceivedComponent,
    AllFuelsReceivedComponent,
    EditFuelReceivedComponent
  ],
  imports: [
    CommonModule,
    FuelsReceivedRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
    AllFuelsReceivedComponent,
  ]
})
export class FuelsReceivedModule { }
