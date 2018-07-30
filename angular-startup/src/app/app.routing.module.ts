import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AboutComponent} from './about/about.component';
import {SkillsComponent} from './skills/skills.component';
import {FormComponent} from './form/form.component';
import {FormWrapperComponent} from './form/form-wrapper.component';
import {FormReactiveComponent} from './form-reactive/form-reactive.component';
import {FormReactiveWrapperComponent} from './form-reactive/form-reactive-wrapper.component';
import {FormValidationComponent} from './form-validation/form-validation.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'form',
    component: FormWrapperComponent
  },
  {
    path: 'form-reactive',
    component: FormReactiveWrapperComponent
  },
  {
    path: 'form-validation',
    component: FormValidationComponent
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //enableTracing: true,
      useHash: true,
      // errorHandler:()=>{},
      // initialNavigation:true,
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
