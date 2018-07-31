import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginService} from '../login/login.service';
import {filter, map, tap} from 'rxjs/operators';

@Component({
  selector: 'messages',
  template: `
    <div class="alert alert-danger" *ngIf="message">
      {{message}}
      <span class="close" (click)="removeMessage()">&times;</span>
    </div>
  `,
  styles: []
})
export class MessagesComponent implements OnInit {

  message: string;

  removeMessage() {
    this.loginService.clearMessage();
  }

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.state
      .pipe(
        map(() => this.loginService.getMessage()),
        tap( message => {
          debugger;
          this.message = message;
        } )
      );

    this.message = this.loginService.getMessage();
  }

}
