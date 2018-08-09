import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TodosService} from './todos.service';

@Component({
  selector: 'popup-todo',
  template: `
    <div>
      <div>
        <div class="close" (click)="close()">&times;</div>
        <div class="alert alert-danger" *ngIf="error">{{error}}</div>
        <div class="alert alert-success" *ngIf="message">{{message}}</div>
      </div>
      <div class="input-group">
        <input type="text" class="form-control" #titleRef>
        <button class="btn btn-success" (click)="addTodo(titleRef.value)">Add Todo</button>
      </div>
    </div>
  `,
  styles: [`
   :host() {
      width: 20%;
      display: block;
      position: fixed;
      background: lightgrey;
      left: 50%;
      margin-left: -10%;
      top: 25%;
      border: 1px solid lightgray;
      padding: 1em;
   }
  `]
})
export class PopupTodoComponent implements OnInit {

  error: string;
  message: string;

  addTodo(title) {
    this.todosService.createTodo({
      title
    })
      .subscribe(() => {
        this.message = 'success!';
        setTimeout(() => {
          this.message = null;
        }, 2000);
      }, err => {
        this.error = err.message;
        setTimeout(() => {
          this.error = null;
        }, 2000);
      });
  }

  close() {
    this.router.navigate([{ outlets: { popup: null }}]);
  }

  constructor(protected todosService: TodosService,
              private router: Router) { }

  ngOnInit() {
  }

}
