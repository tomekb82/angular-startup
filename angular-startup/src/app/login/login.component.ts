import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from './login.service';
import {Credentials} from '../model/credentials';
import {filter, map, tap} from 'rxjs/operators';

@Component({
  selector: 'login',
  template: `
    <h3>Login</h3>

    <div class="alert alert-danger" *ngIf="message">{{message}}</div>
    
    <form [formGroup]="loginForm" (submit)="login()">
      <div class="form-group">
        <label for="">Username:</label>
        <input type="text" class="form-control" formControlName="username">
      </div>
      <div class="form-group">
        <label for="">Password:</label>
        <input type="text" class="form-control" formControlName="password">
      </div>
      <input type="submit" class="btn btn-success">
    </form>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  message: string;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  login() {
    const credentials: Credentials = this.loginForm.value;
    this.loginService.login(credentials,() => {
      this.message = this.loginService.getMessage();
    });

  }

  ngOnInit() {

    this.loginService.state
      .pipe(
        filter(() => this.loginService.isLoggedIn),
        map(() => this.loginService.getMessage()),
        tap( message => this.message = message )
      );

    this.message = this.loginService.getMessage();
  }

}
