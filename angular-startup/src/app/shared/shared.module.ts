import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectableModule} from '../selectable/selectable.module';
import {SelectableDirective} from '../selectable/selectable.directive';
import {SelectionDirective} from '../selectable/selection.directive';

@NgModule({
  imports: [
    CommonModule,
    SelectableModule
  ],
  exports: [
    SelectableDirective,
    SelectionDirective
  ],
  declarations: []
})
export class SharedModule { }
