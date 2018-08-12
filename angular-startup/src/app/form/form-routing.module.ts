import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormWrapperComponent} from './form-wrapper.component';
import {AuthorizedGuard} from '../login/authorized.guard';

const routes: Routes = [{
  path: 'form',
  component: FormWrapperComponent,
  canActivate: [
    AuthorizedGuard
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {

  constructor(private r: RouterModule) {}
}
