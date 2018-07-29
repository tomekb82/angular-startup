import { Injectable } from '@angular/core';
import {Todo} from '../model/todo';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../login/login.service';

@Injectable()
export class TodosService {

  url = 'http://localhost:3000/todos/';

  createTodo(todo: Partial<Todo>) {
    return this.http.post<Todo>(this.url, todo, {
      headers: {
        'Authorization': 'Bearer ' + this.loginService.getToken()
      }
    });
  }

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getAll() {
    return this.http.get<Todo[]>(this.url);
  }

}
