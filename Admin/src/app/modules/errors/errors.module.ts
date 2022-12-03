import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors.component';
import { MatButtonModule } from '@angular/material/button'



@NgModule({
  declarations: [
    ErrorsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    ErrorsComponent,
  ]
})
export class ErrorsModule { }
