import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {PostsService} from './posts.service';
import {Post} from '../model/post';

@Component({
  selector: 'posts',
  template: `
    <div class="card-deck justify-content-around" style="padding: 10px"> 
      <div class="card text-center mb-2" *ngFor="let post of posts | async" [routerLink]="[post.id]" [queryParams]="{page: 1}">
        <div class="card-body" >
          <h5 class="card-title">{{post.title}}</h5>
          <div class="card-text">{{post.body | slice:0:20}}</div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PostsComponent implements OnInit {

  posts: Observable<Post[]> = this.postsService.getPosts();

  constructor(protected postsService: PostsService) { }

  ngOnInit() {
  }

}
