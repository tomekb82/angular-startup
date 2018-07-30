import { Component, OnInit } from '@angular/core';
import {TodosService} from './todos.service';
import {Observable} from 'rxjs/Observable';
import {Todo} from '../model/todo';
import {filter, map, tap} from 'rxjs/operators';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'todos',
  template: `
    <div>
      <h3>Create Todo</h3>
      <div class="alert alert-danger" *ngIf="message">{{message}}</div>
      
      <div class="form-group">
        <input type="text" class="form-control" #titleRef>
      </div>
      <button class="btn btn-success" (click)="addTodo(titleRef.value)">Add Todo</button>
    </div>
    <div class="list-group">
      <div class="list-group-item" *ngFor="let todo of todos | async; let i = index" [selectable]="todo">
        {{i+1}}. {{todo.title}} <input type="checkbox" [checked]="todo.completed" />
      </div>
    </div>
  `,
  styles: []
})
export class TodosComponent implements OnInit {

  message: string;
  todos: Observable<Todo[]>;

  addTodo(title) {
    this.service.createTodo({
      title
    })
      .subscribe(() => {
        console.log('success!');
      }, err => {
        this.message = this.loginService.getMessage();
        // console.log(err);
      });
  }

  constructor(private service: TodosService, private loginService: LoginService) {
    this.todos = service.getAll();
  }

  ngOnInit() {
  }

}
