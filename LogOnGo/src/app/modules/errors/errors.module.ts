import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { ErrorsComponent } from './errors.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ErrorsComponent
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule,
    MatButtonModule,
  ],
  exports: [
    ErrorsComponent,
  ],
})
export class ErrorsModule { }
