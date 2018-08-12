import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AboutComponent} from './about/about.component';
import {FormValidationComponent} from './form-validation/form-validation.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {PopupTodoComponent} from './todos/popup-todo.component';
import {AuthorizedGuard} from './login/authorized.guard';
import {Popup2TodoComponent} from './todos/popup2-todo.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [
      AuthorizedGuard
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [
      AuthorizedGuard
    ]
  },
  {
    path: 'form-validation',
    component: FormValidationComponent,
    canActivate: [
      AuthorizedGuard
    ]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },
  {
    path: 'popup-todo',
    component: PopupTodoComponent,
    outlet: 'popup',
    canActivate: [
      AuthorizedGuard
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
     // enableTracing: true,
      //useHash: true,
      onSameUrlNavigation: 'reload',
      // errorHandler:()=>{},
      // initialNavigation:true,
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
