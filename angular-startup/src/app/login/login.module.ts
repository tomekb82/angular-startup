import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './login.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoginInterceptorService} from './login-interceptor.service';
import {SharedModule} from '../shared/shared.module';
import {AuthorizedGuard} from './authorized.guard';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptorService,
      multi: true
    },
    AuthorizedGuard
  ]
})
export class LoginModule { }
