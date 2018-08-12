import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlbumComponent} from './album.component';
import {AlbumsComponent} from './albums.component';
import {PhotoComponent} from '../photo/photo.component';
import {PhotosComponent} from '../photo/photos.component';
import {AlbumsListComponent} from './albums-list.component';
import {AuthorizedGuard} from '../login/authorized.guard';
import {AlbumResolve} from './album-resolve';
import {PhotoResolve} from '../photo/photo-resolve';

const routes: Routes = [
  {
    path: 'albums',
    canActivateChild: [
      AuthorizedGuard
    ],
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
        resolve: {
          'album': AlbumResolve
        },
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
                component: PhotoComponent,
                resolve: {
                  'photo': PhotoResolve
                },
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
