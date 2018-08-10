import { Component, OnInit } from '@angular/core';
import {map, switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {PhotoService} from './photo.service';

@Component({
  selector: 'photo',
  template: `
    <ng-container *ngIf="photo | async as photo">
      <a routerLink="../../" class="d-flex flex-row-reverse">... Go back to photos</a>
      <div class="card-deck">
        <div class="card-body">
          <h4 class="card-title">{{photo.title}}</h4>
        </div>
        <img class="card-img-top" [src]="photo.url" alt="Card image">
      </div>
    </ng-container>
  `,
  styles: []
})
export class PhotoComponent implements OnInit {

  photoId = this.route.paramMap.pipe(
    map(params => +params.get('id')
    )
  );

  photo = this.photoId.pipe(
    switchMap(id => this.photoService.getPhoto(id))
  );

  constructor(private photoService: PhotoService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
