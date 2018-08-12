import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts.component';
import {PostComponent} from './post.component';
import {AuthorizedGuard} from '../login/authorized.guard';

const routes: Routes = [
  {
    path: 'posts',
    canActivateChild: [
      AuthorizedGuard
    ],
    children: [
      {
        path: '',
        component: PostsComponent
      },
      {
        path: ':id',
        component: PostsComponent
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
