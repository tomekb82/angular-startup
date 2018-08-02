import { Component, OnInit } from '@angular/core';
import {TodosService} from './todos.service';
import {Observable} from 'rxjs/Observable';
import {Todo} from '../model/todo';
import {filter, map, tap} from 'rxjs/operators';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'todos',
  template: `

    <div class="row">
      <div class="col">
        <h3>Search Todos</h3>
        <div class="input-group mb-3">
          <input type="text" class="form-control" (keyup.enter)="search($event.target.value)" placeholder="Search ...">
        </div>
        <div class="list-group">
          <div class="list-group-item" *ngFor="let todo of todos | async; let i = index" [selectable]="todo">
            {{i+1}}. {{todo.title}} <input type="checkbox" [checked]="todo.completed" />
          </div>
        </div>
       <div class="input-group mt-3" *ngIf="todos | async">
          <div class="input-group-prepend">
            <div class="input-group-text">Showing</div>
          </div>
          <select class="form-control" (change)="service.setPerPage($event.target.value)">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <div class="input-group-append">
            <div class="input-group-text">
              of {{ (todos | async)?.length || 0 }} todos
            </div>
          </div>
        </div>
      </div>
      
      <div class="col">
        
        <messages></messages>
        <div class="alert alert-info" *ngIf="error"><b>Server error message: </b>{{error}}</div>
        
        <h3>Create Todo</h3>
        <div class="form-group">
          <input type="text" class="form-control" #titleRef>
        </div>
        <button class="btn btn-success" (click)="addTodo(titleRef.value)">Add Todo</button>
      </div>
    </div>
    
    <div>
      
  `,
  styles: []
})
export class TodosComponent implements OnInit {

  error: boolean;
  todos: Observable<Todo[]> = this.service.getTodos();

  search(query) {
    this.service.search(query);
  }

  addTodo(title) {
    this.service.createTodo({
      title
    })
      .subscribe(() => {
        this.error = null;
      }, err => {
        this.error = err.message;
      });
  }

  constructor(protected service: TodosService) {}

  ngOnInit() {}

}
