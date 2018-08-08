import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormField} from '../model/form-field';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'my-form-group',
  template: `
    <form (ngSubmit)="save()">
      
      <div class="form-group" ngModelGroup="text">
        <label> Text</label>
        <input type="text" class="form-control" ngModel name="value">
      </div>
      
      <div class="form-check" ngModelGroup="checkbox">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" ngModel="active" name="active"> Checkbox
        </label>
      </div>

      <div ngModelGroup="radio">
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="radio" [value]="true" ngModel name="enabled"> Enabled
          </label>
        </div>
        <div class="form-check">
           <label class="form-check-label">
             <input class="form-check-input" type="radio" [value]="false" ngModel name="enabled"> Disabled
          </label>
        </div>
      </div>

      <div class="form-group" ngModelGroup="textarea">
        <label>Textarea</label>
        <textarea class="form-control" ngModel name="value"></textarea>
      </div>

      <div class="form-group" ngModelGroup="select">
        <label>Select</label>
        <select class="form-control" ngModel [compareWith]="compareType" name="select">
          <option *ngFor="let option of options" [ngValue]="option">{{option.label}}</option>
        </select>
      </div>
      
      <div class="form-group">
        <button class="btn btn-success">Save</button>
        <button class="btn btn-danger" type="button" (click)="cancel()">Cancel</button>
        <button class="btn btn-danger" type="button" (click)="reset()">Reset</button>
      </div>

    </form>
  `,
  styles: []
})
export class FormGroupComponent implements OnInit {

  @Input()
  fields;

  @Output()
  fieldsChange = new EventEmitter();

  @ViewChild(NgForm)
  form: NgForm;

  options = [
    { type: 'text', label: 'Text Field'},
    { type: 'checkbox', label: 'Checkbox Field'},
    { type: 'select', label: 'Select Field'}
    ];

  compareType(type1, type2) {
    return  type2 && type1.type === type2.type;
  }

  save() {
    this.fieldsChange.emit(this.form.value);
  }

  cancel() {
    this.form.setValue(this.fields);
  }

  reset() {
    this.form.reset();
  }

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.form.setValue(this.fields);
    }, 0);

  }

}
