import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationComponent } from './form-validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidateMatchFieldDirective } from './validate-match-field.directive';
import { ValidationMessagesComponent } from './validation-messages.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormValidationComponent,
    ValidateMatchFieldDirective,
    ValidationMessagesComponent
  ],
  exports: [
    FormValidationComponent
  ]
})
export class FormValidationModule { }
