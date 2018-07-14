import {Component, Input, OnInit, Optional} from '@angular/core';
import {FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'validation-messages',
  template: `
    <div class="validation-feedback" *ngIf="control.touched || control.dirty">
      <div *ngIf="control.hasError('required')">
        Field is required
      </div>
      <div *ngIf="control.hasError('min')">
        Filed value is less than minimum.
      </div>
      <div *ngIf="control.hasError('max')">
        Field value is greater than maximum.
      </div>
      <div *ngIf="control.getError('minlength') as error">
        Field has to have at least {{error.requiredLength}} letters
      </div>
      <div *ngIf="control.getError('maxlength') as error">
        Field has to have maximum {{error.requiredLength}} letters
      </div>
      <div *ngIf="control.hasError('email')">
        E-mail format is incorrect
      </div>
      <div *ngIf="control.hasError('password')">
        Password format is incorrect
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
  .validation-feedback {
    color: red;
  }
  `]
})
export class ValidationMessagesComponent implements OnInit {

  @Input()
  control;

  @Input()
  controlName;

  constructor(@Optional() private formGroup: FormGroupDirective) {
  }

  ngOnInit() {
    if (!this.control && !this.controlName) {
      throw new Error('Validation messages must have [control] or [controlName] inputs');
    } else {
      if (this.controlName && this.formGroup) {
        this.control = this.formGroup.form.get(this.controlName);
      }
    }
  }

}
