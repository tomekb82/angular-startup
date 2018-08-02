import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {shareReplay, filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../login/login.service';

@Injectable()
export class ProfileService {

  //api_url = 'http://localhost:3000/users/';

  private user_request: Observable<User>;

  getUserProfile(): Observable<User> {

    if (!this.user_request) {
      /*this.user_request = this.http
        .get<User>(this.api_url + '1')
        .pipe(
          shareReplay()
        );
        */
      this.user_request = this.loginService.state
        .pipe(
          filter(() => this.loginService.isLoggedIn),
          map(() => this.loginService.getCurrentUser())
        );
    }

    return this.user_request;
  }

  clearCache() {
    this.user_request = null;
  }

  constructor(private http: HttpClient, private loginService: LoginService) { }

}
