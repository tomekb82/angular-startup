import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarProfileComponent} from './navbar-profile.component';
import {NavbarComponent} from './navbar.component';
import {NavbarLogoComponent} from './navbar-logo.component';

@NgModule({
  imports: [
    CommonModule
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
