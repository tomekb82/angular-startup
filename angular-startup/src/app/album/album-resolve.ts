import {AlbumService} from './album.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Album} from '../model/album';

@Injectable()
export class AlbumResolve implements Resolve<Album> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const id = +route.paramMap.get('id');
    return this.albumService.getAlbum(id);
  }

  constructor(private albumService: AlbumService) {

  }
}
