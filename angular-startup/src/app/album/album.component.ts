import { Component, OnInit } from '@angular/core';
import {AlbumService} from './album.service';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'album',
  template: `
    <ng-container *ngIf="album | async as album">
      <h3>Album: {{album.title}}</h3>
      <!--<photos></photos>-->
      <router-outlet></router-outlet>
    </ng-container>
  `,
  styles: []
})
export class AlbumComponent implements OnInit {

  albumId = this.route.paramMap.pipe(
    map(params => +params.get('id')
    )
  );

  album = this.albumId.pipe(
    switchMap(id => this.albumsService.getAlbum(id))
  );

  constructor(private albumsService: AlbumService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}

