import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlbumComponent} from './album.component';
import {AlbumsComponent} from './albums.component';
import {PhotoComponent} from '../photo/photo.component';
import {PhotosComponent} from '../photo/photos.component';

const routes: Routes = [
  {
    path: 'albums',
    component: AlbumsComponent,
    children: [
      {
        path: '',
        component: AlbumComponent
      },
      {
        path: ':id',
        component: AlbumComponent,
        children: [
          {
            path: '',
            component: PhotosComponent
          },
          {
            path: 'photos/:id',
            component: PhotoComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
