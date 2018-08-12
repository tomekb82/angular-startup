import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PhotoService} from './photo.service';

@Injectable()
export class PhotoResolve implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = +route.paramMap.get('id');
    return this.photoService.getPhoto(id);
  }

  constructor(private photoService: PhotoService) {

  }
}
