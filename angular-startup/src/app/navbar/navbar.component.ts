import {Component, Input, OnInit} from '@angular/core';
import {Nav} from '../model/nav';

@Component({
  selector: 'navbar',
  template: `
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container">
        <navbar-logo></navbar-logo>
        <div class="navbar-collapse">
          <ul class="navbar-nav">
            <ng-container >
              <li *ngFor="let page of pages" class="nav-item" ngClass="page.active">
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

  constructor() { }

  ngOnInit() {
  }

}
