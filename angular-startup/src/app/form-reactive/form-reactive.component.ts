import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'form-reactive-simple',
  template: `
    <div class="form-group">
      <input type="text" class="form-control" [formControl]="formTitle">

      <div class="form-group" [formGroup]="fieldOptions">
        <label>Label</label>
        <input type="text" class="form-control" formControlName="text">
      </div>

      <div class="form-group">
        <label>Checkbox Options</label>
        <div class="input-group" *ngFor="let option of optionsForField.controls" [formGroup]="option">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox" class="form-check" formControlName="selected">
            </div>
          </div>
          <input type="text" class="form-control" formControlName="value">
        </div>

      </div>
      
    </div>
  `,
  styles: []
})
export class FormReactiveComponent implements OnInit {

  formTitle: FormControl;
  fieldOptions: FormGroup;
  optionsForField: FormArray;

  constructor(private fb: FormBuilder) {
    this.formTitle = new FormControl('default value'); //this.fb.control

    this.fieldOptions = new FormGroup({ //this.fb.group
      text: new FormControl('text'),
      label: new FormControl('label')
    });

    this.optionsForField = new FormArray([ //this.fb.array
      this.createOption('Test 1', true),
      this.createOption('Test 2'),
      this.createOptionWithBuilder('Test 3'),
    ]);
  }

  createOption(defaultValue, selected = false) {
    return new FormGroup({
      selected: new FormControl(selected),
      value: new FormControl(defaultValue)
    });
  }

  createOptionWithBuilder(defaultValue, selected = false) {
    return this.fb.group({
      selected: this.fb.control(selected),
      value: this.fb.control(defaultValue)
    });
  }

  ngOnInit() {
  }

}
