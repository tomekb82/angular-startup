import {Component, Input, OnInit} from '@angular/core';
import {Nav} from '../model/nav';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'navbar',
  template: `
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container">
        <navbar-logo></navbar-logo>
        <div class="navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#/">
                Home
              </a>
            </li>
            <ng-container *ngIf="loginService.isLoggedIn">
              <li *ngFor="let page of pages" class="nav-item">
                <a class="nav-link" [href]="page.link">
                  {{page.name}}
                </a>
              </li>
            </ng-container>
          </ul>
        </div>
        <div class="navbar-right">
          <span class="navbar-text">
            <navbar-profile></navbar-profile>
          </span>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  @Input()
  pages: Nav[];

  constructor(protected loginService: LoginService) { }

  ngOnInit() {
  }

}
