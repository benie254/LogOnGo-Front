import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuelRoutingModule } from './fuel-routing.module';
import { FuelComponent } from './fuel.component';
import { FuelService } from './services/fuel.service';
import { FuelReceivedComponent } from './components/fuel-received/fuel-received.component';
import { FuelReceivedFormComponent } from './forms/fuel-received-form/fuel-received-form.component';
import { PetrolReceivedComponent } from './components/petrol-received/petrol-received.component';
import { GasReceivedComponent } from './components/gas-received/gas-received.component';
import { DieselReceivedComponent } from './components/diesel-received/diesel-received.component';
import { FuelReceivedInfoComponent } from './components/fuel-received-info/fuel-received-info.component';


@NgModule({
  declarations: [
    FuelComponent,
    FuelReceivedComponent,
    FuelReceivedFormComponent,
    PetrolReceivedComponent,
    GasReceivedComponent,
    DieselReceivedComponent,
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
