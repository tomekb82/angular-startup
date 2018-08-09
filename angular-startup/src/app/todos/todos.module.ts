import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import {SharedModule} from '../shared/shared.module';
import {TodosService} from './todos.service';
import { PopupTodoComponent } from './popup-todo.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TodosComponent,
    PopupTodoComponent
  ],
  exports: [
    TodosComponent
  ],
  providers: [
    TodosService
  ]
})
export class TodosModule { }
