import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormField} from '../model/form-field';
import {NgForm} from '@angular/forms';
import * as keys from 'lodash/keys';

@Component({
  selector: 'my-form',
  template: `
    <form (ngSubmit)="save()">
      <div *ngFor="let field of fields">
        <div [ngSwitch]="field.type">

          <div *ngSwitchCase=" 'text' ">
            <div class="form-group">
              <label>{{ field.label }}</label>
              <input type="text" class="form-control" [ngModel]="field.value" name="value">
            </div>
          </div>

          <div *ngSwitchCase=" 'checkbox' ">
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" [ngModel]="field.active" name="active"> {{ field.label }}
              </label>
            </div>
          </div>

          <div *ngSwitchCase=" 'radio' ">
            <label>{{ field.label }}</label>  
            <div class="form-check" *ngFor="let radio of field.options">
              <label class="form-check-label">
                <input class="form-check-input" type="radio" [value]="radio.enabled" [ngModel]="field.enabled" name="enabled"> {{ radio.label }}
              </label>
            </div>
           <!-- <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="radio" [value]="false" [ngModel]="field.enabled" name="enabled"> Disabled
              </label>
            </div>-->
          </div>

          <div *ngSwitchCase=" 'textarea' ">
            <div class="form-group">
              <label>{{ field.label }}</label>
              <textarea class="form-control" [ngModel]="field.textarea" name="textarea"></textarea>
            </div>
          </div>
          
          <div *ngSwitchCase=" 'select' ">
            <div class="form-group">
              <label>{{ field.label }}</label>
              <select class="form-control" [ngModel]="field.select" [compareWith]="compareType" [multiple]="field.multiple" name="select">
                <option *ngFor="let option of field.options" [ngValue]="option">{{option.label}}</option>
              </select>
            </div>
          </div>
          
        </div>
        
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
export class FormComponent implements OnInit {

  @Input()
  fields: FormField;

  @Output()
  fieldsChange = new EventEmitter();

  @ViewChild(NgForm)
  form: NgForm;

  compareType(type1, type2) {
    return  type2 && type1.type === type2.type;
  }

  save() {
    this.fieldsChange.emit(this.form.value);
  }

  cancel() {
    this.form.setValue(this.getDefaultValues());
    this.fieldsChange.emit(this.form.value);
  }

  getDefaultValues() {
    const formKeys = Object.keys(this.form.value);
    const changedModel = {};

    this.fields.forEach(defaultField => {
      Object.entries(defaultField).forEach(([defaultKey, defaultValue]) => {
        formKeys.forEach(formKey => {
          if (formKey === defaultKey) {
            changedModel[formKey] = defaultValue;
          }
        });
      });
    });

    return changedModel;
  }

  reset() {
    this.form.reset();
    this.fieldsChange.emit(this.form.value);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
