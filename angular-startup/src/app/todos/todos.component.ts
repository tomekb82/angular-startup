import { Component, OnInit } from '@angular/core';
import {TodosService} from './todos.service';
import {Observable} from 'rxjs/Observable';
import {Todo} from '../model/todo';
import {filter, map, tap} from 'rxjs/operators';
import {LoginService} from '../login/login.service';
import {SelectableService} from '../selectable/selectable.service';

@Component({
  selector: 'todos',
  template: `    
    <div class="row">
      <div class="col">
        <h3>Search Todos</h3>
        <div class="input-group mb-3">
          <input type="text" class="form-control" (keyup.enter)="search($event.target.value)" placeholder="Search ..."
                 [value]="service.searchParams.getValue().query">
        </div>
        <div class="list-group">
          <div class="list-group-item" *ngFor="let todo of todos | async; let i = index" [selectable]="todo">
            {{i+1}}. {{todo.title}} <input type="checkbox" [checked]="todo.completed" />
          </div>
        </div>
       <div class="input-group mt-3" *ngIf="todos | async">
          <div class="input-group-prepend">
            <div class="input-group-text">Page</div>
          </div>
         <input type="number" class="form-control"
                (change)="service.setPage($event.target.value)"
                min="1"
                [value]="service.searchParams.getValue().page"
                [max]="service.state.pages">
         <div class="input-group-prepend">
           <div class="input-group-text">Per Page</div>
         </div>
         <select class="form-control" (change)="service.setPerPage($event.target.value)"
                  [value]="service.searchParams.getValue().perpage">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <div class="input-group-append">
            <div class="input-group-text">
              of {{ service.state.total || 0 }}
            </div>
          </div>
        </div>
      </div>
      
      <div class="col">
        
        <messages></messages>
        <div class="alert alert-info" *ngIf="error"><b>Server error message: </b>{{error}}</div>
        
        <h3>Create Todo</h3>
        <div class="form-group">
          <input type="text" class="form-control" [(ngModel)]="title">
          <button class="btn btn-success" (click)="addTodo()">Add Todo</button>
        </div>

        <button class="btn btn-primary" 
                [routerLink]="[{ outlets: { popup: ['popup-todo'] } }]" 
                routerLinkActive="active"
                [routerLinkActiveOptions]="{exact:true}">
          Show popup
        </button>
        
      </div>
      
      
    </div>
    
    <div>
      
      <router-outlet name="popup"></router-outlet>
      
  `,
  viewProviders: [
    SelectableService
  ],
  styles: []
})
export class TodosComponent implements OnInit {

  title: string;

  error: boolean;
  todos: Observable<Todo[]> = this.service.getTodos();

  search(query) {
    this.service.search(query);
  }

  setError(error) {
    this.error = error;
  }

  addTodo() {
    this.service.createTodo({
      title: this.title
    })
      .subscribe(() => {
        this.error = null;
      }, err => {
        this.error = err.message;
      });
  }

  constructor(protected service: TodosService) {}

  ngOnInit() {
    this.service.title.subscribe(title => this.title = title);
  }

}
