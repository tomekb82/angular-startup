import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from '@angular/forms';

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
              
              <div *ngSwitchCase=" 'text' ">
                <h6>Text Field:</h6>
                <div class="form-group" [formGroup]="field">
                  <label>Label:</label>
                  <input type="text" class="form-control" formControlName="label">
                </div>
              </div>

              <div *ngSwitchCase=" 'textarea' ">
                <h6>Textarea Field:</h6>
                <div class="form-group" [formGroup]="field">
                  <label>Label:</label>
                  <textarea class="form-control" formControlName="label"></textarea>
                </div>
              </div>

              <div *ngSwitchCase=" 'options' ">
                <h6>Checkbox Field:</h6>
                <div class="form-group">
                  <label>Options</label>
                  <div class="input-group" *ngFor="let option of getControls(field.get('options')); let i = index" [formGroup]="option">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input type="checkbox" class="form-check" formControlName="selected">
                      </div>
                    </div>
                    <input type="text" class="form-control" formControlName="value">
                   <!-- <span class="close" (click)="removeOption(field.get('options'), i)">&times;</span>-->
                  </div>
                  <!--<button class="btn mt-1" (click)="addOption(field.get('options'))">Add Option</button>-->
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
      title: this.fb.control('Title'),
      fields: this.fb.array([
        this.createTextField('test'),
        this.createCheckboxField(),
        //this.createSelectField(),
        this.createTextareaField('test')
      ])
    });
  }

  getControls(fields: AbstractControl) {
    if (!(fields instanceof FormArray)) {
      return [];
    }
    return fields.controls;
  }

  ngOnInit() {
  }

  private createTextField(label = '') {
    return this.fb.group({
      type: this.fb.control('text'),
      label: this.fb.control(label)
    });
  }

  private createCheckboxField(label = '') {
    return this.fb.group({
      type: this.fb.control('options'),
      label: this.fb.control(''),
      options: this.fb.array([
        this.createOption('Option 1'),
        this.createOption('Option 2'),
        this.createOption('Option 3'),
      ])
    });
  }

  private createOption(defaultValue = '', selected = false) {
    return this.fb.group({
      selected: this.fb.control(selected),
      value: this.fb.control(defaultValue)
    });
  }

  addOption(options: FormArray) {
    options.push(this.createOption());
  }

  removeOption(options: FormArray, index: number) {
    options.removeAt(index);
  }

  private createSelectField() {

  }

  private createTextareaField(label = '') {
    return this.fb.group({
      type: this.fb.control('textarea'),
      label: this.fb.control(label)
    });
  }
}
