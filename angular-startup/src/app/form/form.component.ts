import {Component, Input, OnInit} from '@angular/core';
import {FormField} from '../model/form-field';

@Component({
  selector: 'my-form',
  template: `    
    <div *ngFor="let field of fields">
      <div [ngSwitch]="field.type">
        
        <div *ngSwitchCase=" 'text' ">
          <div class="form-group">
            <label>{{ field.label }}</label>
            <input type="text" class="form-control" [(ngModel)]="field.value">
          </div>
        </div>

        <div *ngSwitchCase=" 'checkbox' ">
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" [(ngModel)]="field.active"> {{ field.label }}
            </label>
          </div>
        </div>

        <div *ngSwitchCase=" 'radio' ">
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" [value]="true" [(ngModel)]="field.enabled"> Enabled
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" [value]="false" [(ngModel)]="field.enabled"> Disabled
            </label>
          </div>
        </div>

        <div *ngSwitchCase=" 'textarea' ">
          <div class="form-group">
            <label>{{ field.label }}</label>
            <textarea class="form-control" [(ngModel)]="field.value"></textarea>
          </div>
        </div>

        <div *ngSwitchCase=" 'select' ">
          <div class="form-group">
            <label>{{ field.label }}</label>
            <select class="form-control" [(ngModel)]="field.value" [compareWith]="compareType" [multiple]="field.multiple">
              <option *ngFor="let option of field.options" [ngValue]="option">{{option.label}}</option>
            </select>
          </div>
        </div>
        
      
      </div>
    </div>
  `,
  styles: []
})
export class FormComponent implements OnInit {

  @Input()
  fields: FormField;

  compareType(type1, type2){
    return  type2 && type1.type == type2.type
  }

  constructor() { }

  ngOnInit() {
  }

}
