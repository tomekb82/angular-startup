import {Component, Input, OnInit} from '@angular/core';
import {FormField} from '../model/form-field';

@Component({
  selector: 'form-wrapper',
  template: `
    <h3>{{ title }}</h3>
    <b *ngIf="status">Status: {{ status }} </b>
    <div class="row">
      <div class="col-3">
        <my-form [fields]="fields" (fieldsChange)="afterSave($event)"></my-form>
      </div>
      <div class="col-3">
        <pre *ngIf="savedData">{{ savedData | json }}</pre>
      </div>
    </div>
  `,
  styles: []
})
export class FormWrapperComponent implements OnInit {

  title = 'Form - template driven';
  status;
  savedData;

  fields: FormField = [
    {
      label: "Text label",
      value: "default value",
      type: 'text'
    },
    {
      label: "Checkbox label",
      active: true,
      type: 'checkbox'
    },
    {
      label: "Radio label",
      enabled: true,
      options: [
        { label: "Disabled", enabled: false },
        { label: "Enabled", enabled: true }
      ],
      type: 'radio'
    },
    {
      label: "Textarea label",
      textarea: "default textarea value",
      type: 'textarea'
    },
    {
      label: "Select label",
      options: [
        { type: 'text', label:'Text Field'},
        { type: 'checkbox', label:'Checkbox Field'},
        { type: 'select', label:'Select Field'},
      ],
      select: [{ type: 'checkbox', label:'Checkbox Field'}],
      type: 'select',
      multiple: false,
    }
  ];

  afterSave(response) {
    this.status = 'Form saved';
    this.savedData = response;
  }

  constructor() { }

  ngOnInit() {
  }

}
