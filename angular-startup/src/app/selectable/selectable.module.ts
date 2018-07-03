import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableDirective } from './selectable.directive';
import { SelectableService } from './selectable.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectableDirective
  ],
  exports: [
    SelectableDirective
  ],
  providers: [
  //  SelectableService
  ]
})
export class SelectableModule { }
