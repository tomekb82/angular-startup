import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from '@angular/forms';
//https://angular.io/guide/reactive-forms
@Component({
  selector: 'form-reactive-complex',
  template: `
    <div class="row">
      <div class="col">
        
        <form [formGroup]="formModel">
          <div class="form-group">
            <input type="text" class="form-control" formControlName="title">
          </div>
          
          <div *ngFor="let field of getControls(this.formModel.get('fields'))" class="border rounded p-2 mb-2">
            <div [ngSwitch]="field.get('type').value">
              
              <div *ngSwitchCase=" 'text' " [formGroup]="field">
                <h6>{{ getLabel(field) }}</h6>
                <div class="form-group">
                  <label>Label</label>
                  <input type="text" class="form-control" formControlName="label">
                </div>
              </div>

              <div *ngSwitchCase=" 'textarea' " [formGroup]="field">
                <h6>{{ getLabel(field) }}</h6>
                <div class="form-group" >
                  <label>Label:</label>
                  <textarea class="form-control" formControlName="label"></textarea>
                </div>
              </div>

              <div *ngSwitchCase=" 'checkbox' " [formGroup]="field">
                <h6>{{ getLabel(field) }}</h6>
                <div class="form-group">
                  <label>Options</label>
                  <div class="input-group" *ngFor="let option of getControls(field.get('options')); let i = index" [formGroup]="option">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input type="checkbox" class="form-check" formControlName="selected">
                      </div>
                    </div>
                    <input type="text" class="form-control" formControlName="value">
                   <span class="close" (click)="removeOption(field.get('options'), i)">&times;</span>
                  </div>
                  <button class="btn mt-1" (click)="addOption(field.get('options'))">Add Option</button>
                </div>
              </div>
              
              <div *ngSwitchCase=" 'radio' " [formGroup]="field">
                <h6>{{ getLabel(field) }}</h6>
                <div class="form-group" >
                  <div class="input-group" *ngFor="let option of getControls(field.get('options')); let i = index">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input type="radio" class="form-check" formControlName="selected" [value]="option.value">
                      </div>
                    </div>
                    <label class="form-control"> {{option.value}} </label>
                  </div>
                </div>
              </div>
              
              <div *ngSwitchCase=" 'select' " [formGroup]="field">
                <h6>{{ getLabel(field) }}</h6>
                <div class="form-group">
                  <label>Options</label>
                  <select class="input-group" formControlName="selected">
                    <option *ngFor="let option of getControls(field.get('options')); let i = index" [value]="option.value.value">{{option.value.value}}</option>
                  </select>
                </div>
              </div>
            
            </div>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class FormReactiveComplexComponent implements OnInit {

  formModel: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formModel = this.fb.group({
      state: '',
      title: this.fb.control('Title'),
      fields: this.fb.array([
        this.createTextField('Text field'),
        this.createCheckboxField('Checkbox field'),
        this.createRadioField('Radio field'),
        this.createSelectField('Select field'),
        this.createTextareaField('Textarea field')
      ])
    });
  }

  ngOnInit() {
  }

  getControls(fields: AbstractControl) {
    if (!(fields instanceof FormArray)) {
      return [];
    }
    return fields.controls;
  }

  private getLabel(field) {
    return field.get('label').value;
  }

  private createTextField(label = '') {
    return this.fb.group({
      type: this.fb.control('text'),
      label: this.fb.control(label)
    });
  }

  private createCheckboxField(label = '') {
    return this.fb.group({
      type: this.fb.control('checkbox'),
      label: this.fb.control(label),
      options: this.fb.array([
        this.createOption('Option 1'),
        this.createOption('Option 2', true),
        this.createOption('Option 3'),
      ])
    });
  }

  private createRadioField(label = '') {
    return this.fb.group({
      type: this.fb.control('radio'),
      label: this.fb.control(label),
      selected: this.fb.control('radio 2'),
      options: this.fb.array([
        this.fb.control('radio 1'),
        this.fb.control('radio 2')
      ])
    });
  }

  private createSelectField(label = '') {
    return this.fb.group({
      type: this.fb.control('select'),
      label: this.fb.control(label),
      selected: this.fb.control('select 2'),
      options: this.fb.array([
        this.createOption('select 1'),
        this.createOption('select 2'),
        this.createOption('select 3'),
      ])
    });
  }

  private createOption(defaultValue = '', selected = false) {
    return this.fb.group({
      selected: this.fb.control(selected),
      value: this.fb.control(defaultValue)
    });
  }

  private addOption(options: FormArray) {
    options.push(this.createOption());
  }

  private removeOption(options: FormArray, index: number) {
    options.removeAt(index);
  }

  private createTextareaField(label = '') {
    return this.fb.group({
      type: this.fb.control('textarea'),
      label: this.fb.control(label)
    });
  }
}
