import { Component, OnInit } from '@angular/core';
import {AlbumService} from './album.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'albums-list',
  template: `
    <div class="list-group">
      <div class="list-group-item"
           routerLinkActive="active"
           *ngFor="let album of albums | async">
        <a class="text-dark" [routerLink]="['/albums', album.id]">{{album.title}}</a>
      </div>
    </div>
  `,
  styles: []
})
export class AlbumsListComponent implements OnInit {

  selectedAlbumId: number;

  albums = this.albumsService.getAlbums();

  constructor(private albumsService: AlbumService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => +params.get('id'))
    ).subscribe(id => {
      this.selectedAlbumId = id;
    });
  }

}
