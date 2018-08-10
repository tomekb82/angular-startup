import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../model/post';

@Injectable()
export class PostsService {

  url = 'http://localhost:3000/posts/';

  getPost(id: number) {
    return this.http.get<Post>(this.url + id);
  }

  getPosts() {
    return this.http.get<Post[]>(this.url);
  }

  getPostComments(post_id: number, page = 1) {
    return this.http.get<Comment[]>(this.url + post_id + '/comments?_limit=1&_page=' + page);
  }

  getAllPostComments(post_id: number) {
    return this.http.get<Comment[]>(this.url + post_id + '/comments');
  }

  constructor(private http: HttpClient) { }

}
