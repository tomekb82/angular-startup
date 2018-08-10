import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormWrapperComponent} from './form-wrapper.component';

const routes: Routes = [{
  path: 'form',
  component: FormWrapperComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {

  constructor(private r: RouterModule) {}
}
