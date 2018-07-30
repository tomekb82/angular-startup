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
    return this.http.post<Todo>(this.url, todo);
  }

  getAll() {
    return this.http.get<Todo[]>(this.url);
  }

  constructor(private http: HttpClient, private loginService: LoginService) { }

}
