import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuelRoutingModule } from './fuel-routing.module';
import { FuelComponent } from './fuel.component';
import { FuelService } from './services/fuel.service';
import { FuelReceivedComponent } from './components/fuel-received/fuel-received.component';
import { FuelReceivedFormComponent } from './forms/fuel-received-form/fuel-received-form.component';
import { FuelReceivedInfoComponent } from './components/fuel-received-info/fuel-received-info.component';


@NgModule({
  declarations: [
    FuelComponent,
    FuelReceivedComponent,
    FuelReceivedFormComponent,
    FuelReceivedInfoComponent
  ],
  imports: [
    CommonModule,
    FuelRoutingModule,
  ],
  exports: [
    FuelReceivedComponent,
    FuelReceivedInfoComponent,
  ]
})
export class FuelModule { }
