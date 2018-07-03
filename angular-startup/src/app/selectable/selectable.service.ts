import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class SelectableService {

  selectionChange = new EventEmitter();

  constructor() { }

  setSelected(item) {
    this.selectionChange.emit(item);
  }

}
