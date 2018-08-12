import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorizedGuard} from '../login/authorized.guard';
import {TodoGuardGuard} from './todo-guard.guard';
import {TodosComponent} from './todos.component';
import {PopupTodoComponent} from './popup-todo.component';
import {PopupTodoGuard} from './popup-todo-guard';
import {Popup2TodoComponent} from './popup2-todo.component';

const routes: Routes = [
  {
    path: 'todos',
    canActivateChild: [
      AuthorizedGuard
    ],
    children: [
      {
        path: '',
        component: TodosComponent,
        canDeactivate: [
          TodoGuardGuard
        ]
      },
      {
        path: 'popup-todo',
        component: Popup2TodoComponent,
        outlet: 'popup',
        /*canDeactivate: [
          PopupTodoGuard
        ]*/
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
