import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'albums',
  template: `
    <div class="row">
      <div class="col">
        <router-outlet name="list"></router-outlet>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class AlbumsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
