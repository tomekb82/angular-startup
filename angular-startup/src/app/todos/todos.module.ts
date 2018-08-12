import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import {SharedModule} from '../shared/shared.module';
import {TodosService} from './todos.service';
import { PopupTodoComponent } from './popup-todo.component';
import {TodoGuardGuard} from './todo-guard.guard';
import {FormsModule} from '@angular/forms';
import {TodosRoutingModule} from './todos-routing.module';
import {PopupTodoGuard} from './popup-todo-guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    TodosRoutingModule
  ],
  declarations: [
    TodosComponent,
    PopupTodoComponent
  ],
  exports: [
    TodosComponent
  ],
  providers: [
    TodosService,
    TodoGuardGuard,
    PopupTodoGuard
  ]
})
export class TodosModule { }
