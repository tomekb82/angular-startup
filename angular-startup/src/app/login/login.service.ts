import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Credentials} from '../model/credentials';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {map, tap} from 'rxjs/operators';
import {Session} from '../model/session';

@Injectable()
export class LoginService {

  url = 'http://localhost:3000/login';

  isLoggedIn = false;

  private session = new BehaviorSubject<Session>(null);

  state = this.session.pipe(
    map( session => !!session),
    tap( state => this.isLoggedIn = state )
  );

  getCurrentUser() {
    const session = this.session.getValue();
    return session && session.user;
  }

  getToken() {
    const session = this.session.getValue();
    return session && session.token;
  }

  login(credentials: Credentials) {
    this.http.post(this.url, credentials)
      .subscribe((session: Session) => {
          this.session.next(session);
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            console.error(error.error);
          }
        });
  }

  constructor(private http: HttpClient) { }

}
