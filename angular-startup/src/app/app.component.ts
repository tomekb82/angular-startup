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
      name: 'Login',
      link: '#/login',
      active: false
    },
    {
      name: 'Profile',
      link: '#/profile',
      active: false
    },
    {
      name: 'About',
      link: '#/about',
      active: false
    },
    {
      name: 'Forms - template',
      link: '#/form',
      active: false
    },
    {
      name: 'Forms - reactive',
      link: '#/form-reactive',
      active: false
    },
    {
      name: 'Forms - validation',
      link: '#/form-validation',
      active: false
    }
  ];
}
