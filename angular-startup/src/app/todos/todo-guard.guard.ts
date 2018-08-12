import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TodosComponent } from './todos.component';

@Injectable()
export class TodoGuardGuard implements CanDeactivate<TodosComponent> {

  canDeactivate(
    component: TodosComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot) {

    if (component.title) {
      component.setError('Cannot leave without saving todo!');
      return false;
    } else {
      return true;
    }
  }
}
