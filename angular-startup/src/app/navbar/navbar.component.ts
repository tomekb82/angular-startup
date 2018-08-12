import {Component, Input, OnInit} from '@angular/core';
import {Nav} from '../model/nav';
import {LoginService} from '../login/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'navbar',
  template: `    
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container">
        <navbar-logo></navbar-logo>
        <div class="navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                Home
              </a>
            </li>
            <ng-container>
              <li *ngFor="let page of pages" class="nav-item" >
                <a class="nav-link" [routerLink]="page.link" routerLinkActive="active" (click)="changeBreadcrumb(page.name)">
                  {{page.name}}
                </a>
              </li>
              <li class="nav-item"  routerLinkActive="active">
                <a class="nav-link" [routerLink]="[{ outlets: { popup: ['popup-todo'] } }]">
                  Popup Todo
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
    <div class="container">
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active">{{breadcrumb}}</li>
    </ul>
    </div>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  breadcrumb: string;

  @Input()
  pages: Nav[];

  changeBreadcrumb(name) {
    if (this.loginService.isLoggedIn) {
      this.breadcrumb = name;
    }
  }

  constructor(protected loginService: LoginService, private router: ActivatedRoute) { }

  ngOnInit() {
  }

}
