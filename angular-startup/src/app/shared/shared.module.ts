import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectableModule} from '../selectable/selectable.module';
import {SelectableDirective} from '../selectable/selectable.directive';

@NgModule({
  imports: [
    CommonModule,
    SelectableModule
  ],
  exports: [
    SelectableDirective
  ],
  declarations: []
})
export class SharedModule { }
