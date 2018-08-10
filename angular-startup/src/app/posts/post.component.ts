import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from './posts.service';
import {switchMap, map, combineLatest, filter} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'post',
  template: `
    <ng-container *ngIf="post | async as post">
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>

      <h4>Comment</h4>
      <div class="blockquote" *ngFor="let comment of comments | async">
        <p>{{comment.body}}</p>
        <div class="blockquote-footer">{{comment.email}}</div>
      </div>

      <div class="d-flex justify-content-around" *ngIf="page |async as page">
        <a routerLink="./" [queryParams]="{page: page - 1}">&laquo;</a>
        <a routerLink="./" [queryParams]="{page: page + 1}">&raquo;</a>
      </div>

      <a routerLink="../" class="d-flex flex-row-reverse">... Go back to posts</a>
      
    </ng-container>
  `,
  styles: []
})
export class PostComponent implements OnInit {

  post = this.route.paramMap.pipe(
    map(params => +params.get('id')),
    switchMap(id => this.postsService.getPost(id))
  );

  page: Observable<number> = this.route.queryParamMap.pipe(
    map(params => {
      return +params.get('page');
    })
  );

  comments = this.post.pipe(
    combineLatest(this.page),
    switchMap(([ post, page ]) => {
      return this.postsService.getPostComments(post.id, page);
    })
  );

  allComments = this.post.pipe(
    switchMap((post ) => {
      return this.postsService.getAllPostComments(post.id);
    })
  );

  constructor(private route: ActivatedRoute,
              private postsService: PostsService,
              private router: Router) {
  }

  ngOnInit() {}

}
