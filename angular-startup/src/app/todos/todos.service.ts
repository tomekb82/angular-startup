import { Injectable } from '@angular/core';
import {Todo} from '../model/todo';
import {HttpClient} from '@angular/common/http';
import {switchMap, filter, share} from 'rxjs/operators';
import {LoginService} from '../login/login.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {SearchParams} from '../model/search-params';

@Injectable()
export class TodosService {

  DEFAULT_PER_PAGE = 10;

  url = 'http://localhost:3000/todos/';

  searchParams = new BehaviorSubject<SearchParams>({
    query: '',
    perpage: this.DEFAULT_PER_PAGE
  });

  search(query) {
    this.searchParams.next({
      ...this.searchParams.getValue(),
      query
    });
  }

  createTodo(todo: Partial<Todo>) {
    return this.http.post<Todo>(this.url, todo);
  }

  getTodos() {
    return this.searchParams.pipe(
      filter(params => !!params.query),
      switchMap( params => this.http.get<Todo[]>(this.url, {
        params: {
          q: params.query,
          _limit: '' + params.perpage
        }
      })),
      share()
    );
  }

  constructor(private http: HttpClient, private loginService: LoginService) { }

}
