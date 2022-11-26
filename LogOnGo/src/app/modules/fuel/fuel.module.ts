import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuelRoutingModule } from './fuel-routing.module';
import { FuelReceivedComponent } from './components/fuel-received/fuel-received.component';
import { FuelReceivedFormComponent } from './forms/fuel-received-form/fuel-received-form.component';
import { FuelReceivedInfoComponent } from './components/fuel-received-info/fuel-received-info.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    FuelReceivedComponent,
    FuelReceivedFormComponent,
    FuelReceivedInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FuelRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [
    FuelReceivedComponent,
    FuelReceivedInfoComponent,
    FuelReceivedFormComponent,
  ]
})
export class FuelModule { }
