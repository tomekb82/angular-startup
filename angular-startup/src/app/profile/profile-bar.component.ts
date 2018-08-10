import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {ProfileService} from './profile.service';
import {LoginService} from '../login/login.service';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'profile-bar',
  template: `
    <ng-container *ngIf="loginService.isLoggedIn">
      User: <strong>{{ (profile | async).name }}</strong>
      <span (click)="loginService.logout();"> | Logout </span>
    </ng-container>
    <ng-container *ngIf="!loginService.isLoggedIn">
      <span>  
        <a routerLink="/login" >Login</a>  
        <a routerLink="/form-validation" >| Register</a> 
      </span>
    </ng-container>
  `,
  styles: []
})
export class ProfileBarComponent implements OnInit {

  profile: Observable<User> = this.profileService.getUserProfile().pipe(tap(console.log));

  constructor(protected profileService: ProfileService,  protected loginService: LoginService) { }

  ngOnInit() {}
}
