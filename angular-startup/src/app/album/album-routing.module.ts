import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlbumComponent} from './album.component';
import {AlbumsComponent} from './albums.component';
import {PhotoComponent} from '../photo/photo.component';
import {PhotosComponent} from '../photo/photos.component';
import {AlbumsListComponent} from './albums-list.component';

const routes: Routes = [
  {
    path: 'albums',
    children: [
      {
        path: '',
        component: AlbumsComponent,
        children: [
          {
            path: '',
            component: AlbumsListComponent,
            outlet: 'list'
          }
        ]
      },
      {
        path: ':id',
        component: AlbumsComponent,
        children: [
          {
            path: '',
            component: AlbumsListComponent,
            outlet: 'list'
          },
          {
            path: '',
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
          },
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
