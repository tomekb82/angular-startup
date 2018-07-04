import { Component, OnInit } from '@angular/core';
import {TodosService} from './todos.service';

@Component({
  selector: 'todos',
  template: `
    <div class="list-group">
      <div class="list-group-item" *ngFor="let todo of todos" [selectable]="todo">
        Todo: {{todo.name}}
      </div>
    </div>
  `,
  styles: []
})
export class TodosComponent implements OnInit {

  todos = [];

  constructor(private service: TodosService) {
    this.todos = service.getAll();
  }

  ngOnInit() {
  }

}
