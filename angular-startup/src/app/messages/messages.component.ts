import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginService} from '../login/login.service';

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

  constructor(private loginService: LoginService) {
    this.message = this.loginService.getMessage();
  }

  ngOnInit() {
    this.loginService.state.subscribe(() => this.message = this.loginService.getMessage());
  }

}
