import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TodosService} from './todos.service';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {debounceTime, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'popup2-todo',
  template: `    
    <div class="modal" id="myModal" style="display: inline">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Modal Heading</h4>
            <button type="button" class="close" data-dismiss (click)="close()">&times;</button>
            <div class="alert alert-danger" *ngIf="error">{{error}}</div>
            <div class="alert alert-success" *ngIf="message">{{message}}</div>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            Adding new todo
            <div class="input-group">
              <input type="text" class="form-control" [(ngModel)]="title" id="title">
              <button class="btn btn-success" (click)="addTodo()">Add</button>
            </div>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal" (click)="close()">Close</button>
          </div>

        </div>
      </div>
    </div>
  `,
  styles: ['']
})
export class Popup2TodoComponent implements OnInit {

  title: string;
  error: string;
  message: string;

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
