import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LoginService} from './login.service';
import {catchError} from 'rxjs/operators';
import {empty} from 'rxjs/observable/empty';

@Injectable()
export class LoginInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(this.setAuthorizationHeader(req))
    return next.handle(this.setAuthorizationHeader(req)).pipe(

      catchError((err, caught) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          this.loginService.logout('Authorization Required - Please log in!');
          //return empty();
        } else {
          this.loginService.setMessage(err.error);
        }
        throw new Error(err.error);
        return Observable.throw(err);
      })
    );
  }

  setAuthorizationHeader(req: HttpRequest<any>) {
    return req.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + this.loginService.getToken()
      }
    });
  }

  constructor(private loginService: LoginService) { }

}
