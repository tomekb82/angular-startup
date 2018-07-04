import {Component, Input, OnInit} from '@angular/core';
import {FormField} from '../model/form-field';

@Component({
  selector: 'form-wrapper',
  template: `
    <h3>{{ title }}</h3>
    <div class="row">
      <div class="col-3">
        <my-form [fields]="fields"></my-form>
      </div>
    </div>
  `,
  styles: []
})
export class FormWrapperComponent implements OnInit {

  title = 'Form';

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
      //label: "Checkbox label",
      enabled: false,
      type: 'radio'
    },
    {
      label: "Textarea label",
      value: "default value",
      type: 'textarea'
    },
    {
      label: "Textarea label",
      options: [
        { type: 'text', label:'Text Field'},
        { type: 'checkbox', label:'Checkbox Field'},
        { type: 'select', label:'Select Field'},
      ],
      value: [{ type: 'checkbox', label:'Checkbox Field'}],
      type: 'select',
      multiple: false,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
