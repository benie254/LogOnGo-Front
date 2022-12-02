import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors.component';



@NgModule({
  declarations: [
    ErrorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorsComponent,
  ]
})
export class ErrorsModule { }
