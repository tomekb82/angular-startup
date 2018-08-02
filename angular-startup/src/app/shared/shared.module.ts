import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectableModule} from '../selectable/selectable.module';
import {SelectableDirective} from '../selectable/selectable.directive';
import {SelectionDirective} from '../selectable/selection.directive';
import {MessagesModule} from '../messages/messages.module';
import {MessagesComponent} from '../messages/messages.component';

@NgModule({
  imports: [
    CommonModule,
    SelectableModule,
    MessagesModule
  ],
  exports: [
    SelectableDirective,
    SelectionDirective,
    MessagesComponent
  ],
  declarations: []
})
export class SharedModule { }
