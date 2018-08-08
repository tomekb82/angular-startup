import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'form-template',
  template: `
    <form (ngSubmit)="save()">

      <div class="form-group" ngModelGroup="text">
        <label> Text</label> <!-- ad. 1 jak ustawic labelke z modelu -->
        <input type="text" class="form-control" ngModel name="value">
      </div>
      
      <div class="form-group" ngModelGroup="select">
        <label>Select</label>
        <select class="form-control" ngModel [compareWith]="compareType" name="select">
          <option *ngFor="let option of options" [ngValue]="option">{{option.label}}</option> <!-- ad. 2 jak przekazac opcje z modelu -->
        </select>
      </div>

      <div class="form-group">
        <button class="btn btn-success">Save</button>
      </div>

    </form>
  `,
  styles: []
})
export class FormTemplateComponent implements OnInit {

  fields = {
    text: {
      // 1. TODO TBE: jak przekazac te labelke to formularza:
      // label: 'Text',
      value: 'default value'
    },
    select: {
      // 2. TODO: TBE jak przekazac opcje to formularze
      /*options: [
        { type: 'text', label:'Text Field'},
        { type: 'checkbox', label:'Checkbox Field'},
        { type: 'select', label:'Select Field'},
      ],*/
      select: { type: 'checkbox', label: 'Checkbox Field'},
    }
  };

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

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.form.setValue(this.fields);
    }, 0);

  }

}
