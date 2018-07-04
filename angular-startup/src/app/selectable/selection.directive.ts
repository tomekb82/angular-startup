import {Directive, Host, Input, OnInit, Output} from '@angular/core';
import {SelectableService} from './selectable.service';

@Directive({
  selector: '[selection]',
  providers: [
    SelectableService
  ]
})
export class SelectionDirective {

  @Input('selection')
  set setSelection(newSelection) {
    this.service.setSelected(newSelection);
  }

  @Output()
  selectionChange = this.service.selectionChange;

  constructor(private service: SelectableService) {
  }

}
