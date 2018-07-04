import { Component, OnInit } from '@angular/core';
import {SelectableService} from '../selectable/selectable.service';

@Component({
  selector: 'about',
  template: `    
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>
            Skills list:
          </h1>
          {{selected | json}}

          <div class="row">
            <ng-container [(selection)]="selected">
              <div class="col">
                <skills></skills>
                <todos></todos>
              </div>
              <div class="col">
                <todos></todos>
              </div>
              <div class="col" selection>
                <todos></todos>
              </div>
            </ng-container>
          </div>
        </div>
      </div>
    </div>
  `,
  viewProviders: [
    SelectableService
  ],
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
