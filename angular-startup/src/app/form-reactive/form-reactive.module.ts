import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReactiveComponent } from './form-reactive.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormReactiveWrapperComponent } from './form-reactive-wrapper.component';
import { FormReactiveComplexComponent } from './form-reactive-complex.component';
import {FormReactiveRoutingModule} from './form-reactive-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormReactiveRoutingModule
  ],
  declarations: [FormReactiveComponent, FormReactiveWrapperComponent, FormReactiveComplexComponent]
})
export class FormReactiveModule { }
