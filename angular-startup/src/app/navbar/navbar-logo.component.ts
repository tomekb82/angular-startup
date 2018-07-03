import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-logo',
  template: `
    <!-- Brand -->
    <!--<a class="navbar-brand" href="#">
      <img src="bird.jpg" alt="Logo" style="width:40px;">
    </a>-->
    <a class="navbar-brand" href="#">Logo</a>
  `,
  styles: []
})
export class NavbarLogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
