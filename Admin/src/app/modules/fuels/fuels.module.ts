import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuelsRoutingModule } from './fuels-routing.module';
import { AddFuelComponent } from './add-fuel/add-fuel.component';
import { AllFuelsComponent } from './all-fuels/all-fuels.component';
import { EditFuelComponent } from './edit-fuel/edit-fuel.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AddFuelComponent,
    AllFuelsComponent,
    EditFuelComponent
  ],
  imports: [
    CommonModule,
    FuelsRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
    AllFuelsComponent,
  ]
})
export class FuelsModule { }
