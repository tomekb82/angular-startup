import { Injectable } from '@angular/core';
import {Todo} from '../model/todo';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty'
import {LoginService} from '../login/login.service';

@Injectable()
export class TodosService {

  url = 'http://localhost:3000/todos/';

  createTodo(todo: Partial<Todo>) {
    return this.http.post<Todo>(this.url, todo, {
      headers: {
        'Authorization': 'Bearer ' + this.loginService.getToken()
      }
    }).pipe(
      // map(...
      catchError((err, caught) => {

        if (err instanceof HttpErrorResponse) {
          this.loginService.logout('Not authorized to add Todos! Please log in first!');
          throw new Error('Not authorized! Please log in!');
        }

        return empty();
      })
    );
  }

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getAll() {
    return this.http.get<Todo[]>(this.url);
  }

}
