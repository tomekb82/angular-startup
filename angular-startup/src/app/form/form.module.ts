import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import {FormsModule} from '@angular/forms';
import { FormWrapperComponent } from './form-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormComponent,
    FormWrapperComponent
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
