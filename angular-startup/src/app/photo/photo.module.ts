import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotosComponent } from './photos.component';
import {PhotoService} from './photo.service';
import { PhotoComponent } from './photo.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoRoutingModule
  ],
  declarations: [PhotosComponent, PhotoComponent],
  exports: [PhotosComponent],
  providers: [PhotoService]
})
export class PhotoModule { }
