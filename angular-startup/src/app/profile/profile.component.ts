import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';

@Component({
  selector: 'profile',
  template: `
    <div *ngIf="profile">
      <h3>User Profile</h3>
      <p>Name: {{profile.name}}</p>
      <p>Username: {{profile.username}}</p>
    </div>
    <button (click)="clearCache()">Clear cache</button>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  profile: User;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUserProfile()
      .subscribe( user => this.profile = user);
  }

  clearCache() {
    this.profileService.clearCache();
  }

}
