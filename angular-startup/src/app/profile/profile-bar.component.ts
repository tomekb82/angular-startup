import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {ProfileService} from './profile.service';

@Component({
  selector: 'profile-bar',
  template: `
    <ng-container *ngIf="profile">
      User: <strong>{{ profile.name }}</strong>
    </ng-container>
  `,
  styles: []
})
export class ProfileBarComponent implements OnInit {

  profile: User;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUserProfile()
      .subscribe(user => this.profile = user);
  }

}
