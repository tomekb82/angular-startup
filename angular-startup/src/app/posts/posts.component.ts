import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {PostsService} from './posts.service';
import {Post} from '../model/post';

@Component({
  selector: 'posts',
  template: `    
    <div class="row">
      <div clas="col">
        <h3>Posts</h3>
        <div class="list-group">
          <div class="list-group-item" *ngFor="let post of posts | async">
            <a [href]="'#/posts/' + post.id"> {{post.title}} </a>
          </div>
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
