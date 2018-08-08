import { Injectable } from '@angular/core';
import {Todo} from '../model/todo';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {switchMap, filter, share, tap, map} from 'rxjs/operators';
import {LoginService} from '../login/login.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {SearchParams} from '../model/search-params';

@Injectable()
export class TodosService {

  DEFAULT_PER_PAGE = 10;

  url = 'http://localhost:3000/todos/';

  searchParams = new BehaviorSubject<SearchParams>({
    query: '',
    perpage: this.DEFAULT_PER_PAGE,
    page: 1
  });

  state = {
    total: 0,
    pages: 1
  };

  search(query: string) {
    this.searchParams.next({
      ...this.searchParams.getValue(),
      query
    });
  }

  setTotal(total: number) {
    this.state = {
      total,
      pages: Math.ceil(total / this.searchParams.getValue().perpage)
    };
  }

  setPerPage(perpage: number) {
    this.searchParams.next({
      ...this.searchParams.getValue(),
      perpage,
      page: 1
    });
  }

  setPage(page: number) {
    this.searchParams.next({
      ...this.searchParams.getValue(),
      page
    });
  }

  createTodo(todo: Partial<Todo>) {
    return this.http.post<Todo>(this.url, todo).pipe(
      tap(() => this.searchParams.next( this.searchParams.getValue()))
    );
  }

  getTodos() {
    return this.searchParams.pipe(
      filter(params => !!params.query),
      switchMap( params => this.http.get<Todo[]>(this.url, {
        params: {
          q: params.query,
          _limit: '' + params.perpage,
          _page: '' + params.page
        },
        observe: 'response'
      })),
      map( (response: HttpResponse<Todo[]>) => {
        this.setTotal(parseInt(response.headers.get('X-Total-Count')));
        return response.body;
      }),
      share()
    );
  }

  constructor(private http: HttpClient, private loginService: LoginService) { }

}
