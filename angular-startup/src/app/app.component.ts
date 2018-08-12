import { Component } from '@angular/core';
import {Nav} from './model/nav';
import {FormValidationComponent} from './form-validation/form-validation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nav: Nav[] = [
    // main routes
    {
      name: 'Profile',
      link: '/profile'
    },
    {
      name: 'About',
      link: '/about'
    },
    // child routes
    {
      name: 'Forms - template',
      link: '/form'
    },
    {
      name: 'Forms - reactive',
      link: '/form-reactive'
    },
    {
      name: 'Posts',
      link: '/posts'
    },
    {
      name: 'Albums',
      link: '/albums'
    },
    {
      name: 'Todos',
      link: '/todos'
    }
  ];
}
