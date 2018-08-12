import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TodosService} from './todos.service';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {debounceTime, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'popup-todo',
  template: `
    <div>
      <div>
        <div class="close" (click)="close()">&times;</div>
        <div class="alert alert-danger" *ngIf="error || getStError()">{{error || getStError()}}</div>
        <div class="alert alert-success" *ngIf="message">{{message}}</div>
      </div>
      <h3> Adding new todo</h3>
      <div class="input-group">
        <input type="text" class="form-control" [(ngModel)]="title" id="title">
        <button class="btn btn-success" (click)="addTodo()">Add</button>
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

  static staticError: string;

  title: string;
  error: string;
  message: string;

  static setStaticError(error) {
    PopupTodoComponent.staticError = error;
  }

  getStError() {
    return PopupTodoComponent.staticError;
  }

  setError(error) {
    this.error = error;
  }

  addTodo() {
    this.todosService.createTodo({
      title: this.title
    })
      .subscribe(() => {
        this.message = 'success!';
        setTimeout(() => {
          this.message = null;
          }, 2000);
        }, err => {
        this.error = err.message;
        setTimeout(() => {
          this.error = null;},
          2000);
      });
  }

  close() {
    this.router.navigate(['todos', { outlets: { popup: null }}]);
  }


  constructor(protected todosService: TodosService,
              private router: Router) {
  }

  ngOnInit() {
    const input = document.getElementById('title');
    const example: Observable<any> = fromEvent(input, 'keyup').pipe(
      map((e: KeyboardEvent) => e.currentTarget)
    );
    const debouncedInput = example.pipe(debounceTime(500));
    const subscribe = debouncedInput.subscribe(val => {
      console.log(`Debounced Input: ${val.value}`);
      this.todosService.setTitle(val.value);
    });
  }

}
