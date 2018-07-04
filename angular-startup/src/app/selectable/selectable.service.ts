import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class SelectableService {

  selection;
  selectionChange = new EventEmitter();

  constructor() { }

  setSelected(item) {
    this.selection = item;
    this.selectionChange.emit(this.selection);
  }

}
