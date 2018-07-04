import { Component } from '@angular/core';
import {Nav} from './model/nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nav: Nav[] = [
    {
      name: 'Home',
      link: '#/home',
      active: true
    },
    {
      name: 'About',
      link: '#/about',
      active: false
    }
  ];
}
