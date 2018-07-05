import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import {FormsModule} from '@angular/forms';
import { FormWrapperComponent } from './form-wrapper.component';
import { FormGroupComponent } from './form-group.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormComponent,
    FormWrapperComponent,
    FormGroupComponent
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
