import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Credentials} from '../model/credentials';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {map, tap} from 'rxjs/operators';
import {Session} from '../model/session';
import {SearchParams} from '../model/search-params';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  url = 'http://localhost:3000/login';

  isLoggedIn = false;

  private session = new BehaviorSubject<Session>(null);

  state = this.session.pipe(
    map(session => session && !!session.token)
  );

  constructor(private http: HttpClient, private router: Router) {
    this.state.subscribe(state => this.isLoggedIn = !!state);
  }

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

  login(credentials: Credentials) {
    this.clearMessage();
    return this.http.post(this.url, credentials)
      .subscribe((session: Session) => this.session.next(session));
  }

  clearMessage() {
    this.session.next({
      ...this.session.getValue(),
      message: null
    });
  }

  setMessage(message) {
    this.session.next({
      ...this.session.getValue(),
      message
    });
  }

  logout(message?: string) {
    this.session.next({
      ...this.session.getValue(),
      token: null,
      message
    });
    this.router.navigate(['/']);
  }

}
