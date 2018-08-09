import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarProfileComponent} from './navbar-profile.component';
import {NavbarComponent} from './navbar.component';
import {NavbarLogoComponent} from './navbar-logo.component';
import {ProfileModule} from '../profile/profile.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProfileModule
  ],
  declarations: [
    NavbarComponent,
    NavbarProfileComponent,
    NavbarLogoComponent,
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
