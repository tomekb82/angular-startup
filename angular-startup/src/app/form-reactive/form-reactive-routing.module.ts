import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormReactiveWrapperComponent} from './form-reactive-wrapper.component';
import {AuthorizedGuard} from '../login/authorized.guard';

const routes: Routes = [{
  path: 'form-reactive',
  component: FormReactiveWrapperComponent,
  canActivate: [
    AuthorizedGuard
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormReactiveRoutingModule {}
