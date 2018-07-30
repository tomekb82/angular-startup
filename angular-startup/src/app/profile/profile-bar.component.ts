import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {ProfileService} from './profile.service';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'profile-bar',
  template: `
    <ng-container *ngIf="profile">
      User: <strong>{{ profile.name }}</strong>
      <span (click)="loginService.logout();"> | Logout </span>
    </ng-container>
  `,
  styles: []
})
export class ProfileBarComponent implements OnInit {

  profile: User;

  constructor(protected profileService: ProfileService,  protected loginService: LoginService) { }

  ngOnInit() {
    this.profileService.getUserProfile()
      .subscribe(user => this.profile = user);
  }
}
