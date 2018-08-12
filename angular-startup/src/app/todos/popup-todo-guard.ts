import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {PopupTodoComponent} from './popup-todo.component';

@Injectable()
export class PopupTodoGuard implements CanDeactivate<PopupTodoComponent> {

  canDeactivate(
    component: PopupTodoComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot) {

    if (component.title) {
      component.setError('Cannot leave without saving todo!');
      PopupTodoComponent.setStaticError('Cannot leave without saving todo!');
      return false;
    } else {
      return true;
    }
  }
}
