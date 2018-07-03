import {Directive, Host, HostBinding, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {SelectableService} from './selectable.service';

@Directive({
  selector: '[selectable]'
})
export class SelectableDirective implements OnDestroy, OnInit {

  private subscription;

  @Input('selectable')
  item;

  @HostListener('click')
  select() {
    this.service.setSelected(this.item);
  }

  @HostBinding('class.active')
  selected = false;

  constructor(@Host() private service: SelectableService) {
  }

  ngOnInit() {
    this.subscription = this.service.selectionChange.subscribe(selected => this.selected = selected === this.item)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
