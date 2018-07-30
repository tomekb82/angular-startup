import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-profile',
  template: `
    <profile-bar></profile-bar>
  `,
  styles: []
})
export class NavbarProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
