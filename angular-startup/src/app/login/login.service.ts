import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Credentials} from '../model/credentials';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {map, tap} from 'rxjs/operators';
import {Session} from '../model/session';
import {SearchParams} from '../model/search-params';

@Injectable()
export class LoginService {

  url = 'http://localhost:3000/login';

  isLoggedIn = false;

  private session = new BehaviorSubject<Session>(null);

  state = this.session.pipe(
    map( session => !!session),
    tap( state => this.isLoggedIn = state)
  );

  getCurrentUser() {
    const session = this.session.getValue();
    return session && session.token && session.user;
  }

  getToken() {
    const session = this.session.getValue();
    return session && session.token;
  }

  getMessage() {
    const session = this.session.getValue();
    return session && session.message;
  }

  login(credentials: Credentials, callback) {
    this.http.post(this.url, credentials)
      .subscribe((session: Session) => {
          this.session.next(session);
          this.clearMessage();
          callback();
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            this.logout(error.error);
            callback();
          }
        });
  }

  expireToken() {
    this.session.next({
      ...this.session.getValue(),
      token: 'OLD_INVALID_TOKEN'
    });
  }

  clearMessage() {
    this.session.next({
      ...this.session.getValue(),
      message: null
    });
  }

  logout(message?: string) {
    this.session.next({
      ...this.session.getValue(),
      token: null,
      message
    });
  }

  constructor(private http: HttpClient) { }

}
