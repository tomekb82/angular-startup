import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormReactiveWrapperComponent} from './form-reactive-wrapper.component';

const routes: Routes = [{
  path: 'form-reactive',
  component: FormReactiveWrapperComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormReactiveRoutingModule {}
