import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album} from '../model/album';

@Injectable()
export class PhotoService {

  url = 'http://localhost:3000/photos/';

  constructor(private http: HttpClient) { }

  getPhotos(albumId: number) {
    return this.http.get<any>(this.url + '?albumId=' + albumId);
  }

  getPhoto(id: number) {
    return this.http.get<any>(this.url + id);
  }
}
