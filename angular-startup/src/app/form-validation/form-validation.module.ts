import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationComponent } from './form-validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidateMatchFieldDirective } from './validate-match-field.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormValidationComponent,
    ValidateMatchFieldDirective
  ],
  exports: [
    FormValidationComponent
  ]
})
export class FormValidationModule { }
