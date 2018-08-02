import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from './login.service';
import {Credentials} from '../model/credentials';
import {filter, map, tap} from 'rxjs/operators';

@Component({
  selector: 'login',
  template: `
    <h3>Login</h3>
    <messages></messages>
    
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

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  login() {
    this.loginService.login(this.loginForm.value);
  }

  ngOnInit() {}

}
