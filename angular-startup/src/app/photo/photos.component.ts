import { Component, OnInit } from '@angular/core';
import {map, switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {PhotoService} from './photo.service';

@Component({
  selector: 'photos',
  template: `    
    <div class="row">
      <div class="col-3sm" *ngFor="let photo of photos | async" style="padding: 5px">
        <div class="card"  style="width: 200px; height: 400px">
          <img class="card-img-top" [src]="photo.thumbnailUrl" alt="Card image">
          <div class="card-body">
            <h6 class="card-title">{{photo.title}}</h6>
            <p class="card-text">{{photo.description}}</p>
            <a class="btn btn-primary" [routerLink]="['/albums', album_id, 'photos', photo.id]" >See photo</a>
          </div>
        </div>
      </div>
      <!--<div class="col">
        <router-outlet></router-outlet>
      </div>-->
    </div>
  `,
  styles: []
})
export class PhotosComponent implements OnInit {

  album_id;
  albumId = this.route.paramMap.pipe(
    map(params => +params.get('id'))
  );

  photos = this.albumId.pipe(
    switchMap(id => this.photoService.getPhotos(id))
  );

  constructor(private photoService: PhotoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.albumId.subscribe((data) => this.album_id = data);
  }

}
