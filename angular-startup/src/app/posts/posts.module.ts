import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post.component';
import {SharedModule} from '../shared/shared.module';
import {PostsService} from './posts.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule
  ],
  declarations: [
    PostsComponent,
    PostComponent
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }
