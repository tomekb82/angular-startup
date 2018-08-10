import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { AlbumsComponent } from './albums.component';
import { AlbumsListComponent } from './albums-list.component';
import {AlbumService} from './album.service';
import {PhotoModule} from '../photo/photo.module';

@NgModule({
  imports: [
    CommonModule,
    AlbumRoutingModule,
    PhotoModule
  ],
  declarations: [
    AlbumComponent,
    AlbumsComponent,
    AlbumsListComponent
  ],
  providers: [AlbumService]
})
export class AlbumModule { }