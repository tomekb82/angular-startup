import { Injectable } from '@angular/core';
import {Todo} from '../model/todo';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';

@Injectable()
export class TodosService {

  url = 'http://localhost:3000/todos/';

  createTodo(todo: Partial<Todo>) {
    return this.http.post<Todo>(this.url, todo);
  }

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Todo[]>(this.url);
  }

}
