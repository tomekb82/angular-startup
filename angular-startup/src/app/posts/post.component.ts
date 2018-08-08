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
      
      <button class="btn btn-success" (click)="back()">Go to posts</button>
      
      <a (click)="previousComment()"><<</a>
      <a (click)="nextComment()"> >> </a>
      
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

  commentParams;

  commentParamsAsync = this.post.pipe(
    combineLatest(this.page, this.allComments),
    switchMap(([ post, page, allComments ]) => {
      return Observable.create((observer: Observer<any>) => {
        observer.next({post, page, allComments});
        observer.complete();
      });
    })
  );

  nextComment() {
    this.changeCommentPage();
  }

  previousComment() {
    this.changeCommentPage(false);
  }

  changeCommentPage(inc = true) {
    const { post : { id }, page, allComments } = this.commentParams;
    const newPage = inc ? page + 1 : page - 1;
    if (newPage < 1 || newPage > allComments.length) {
      return;
    }
    this.router.navigateByUrl('posts/' + id + '?page=' + newPage);
  }

  back() {
    this.router.navigateByUrl('/posts');
  }

  constructor(private route: ActivatedRoute,
              private postsService: PostsService,
              private router: Router) {
  }

  ngOnInit() {
    this.commentParamsAsync.subscribe(commentParams => {
      this.commentParams = commentParams;
    });
  }

}
