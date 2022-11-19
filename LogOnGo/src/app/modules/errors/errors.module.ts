import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { ErrorsComponent } from './errors.component';


@NgModule({
  declarations: [
    ErrorsComponent
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ],
  exports: [
    ErrorsComponent,
  ],
})
export class ErrorsModule { }
