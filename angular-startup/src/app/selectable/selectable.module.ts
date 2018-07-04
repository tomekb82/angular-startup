import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableDirective } from './selectable.directive';
import { SelectionDirective } from './selection.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectableDirective,
    SelectionDirective
  ],
  exports: [
    SelectableDirective,
    SelectionDirective
  ],
  providers: [
  //  SelectableService
  ]
})
export class SelectableModule { }
