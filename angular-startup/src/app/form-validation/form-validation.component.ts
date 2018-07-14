import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'form-registration',
  template: `
    <h3>Form Registration</h3>
    <form [formGroup]="registrationForm">
      <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control" formControlName="username">
        <div class="validation-feedback" *ngIf="checkField('username')">
          <div *ngIf="registrationForm.get('username').hasError('required')">
            Field is required
          </div>
          <div *ngIf="registrationForm.get('username').getError('minlength') as error">
            Field has to have at least {{error.requiredLength}} letters
          </div>
          <div *ngIf="registrationForm.get('username').getError('maxlength') as error">
            Field has to have maximum {{error.requiredLength}} letters
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>E-Mail:</label>
        <input type="text" class="form-control" formControlName="email">
        <div class="validation-feedback" *ngIf="checkField('email')">
          <div *ngIf="registrationForm.get('email').hasError('required')">
            Field is required
          </div>
          <div *ngIf="registrationForm.get('email').hasError('email')">
            E-mail format is invalid.
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="text" class="form-control" formControlName="password">
        <div class="validation-feedback" *ngIf="checkField('password')">
          <div *ngIf="registrationForm.get('password').hasError('required')">
            Field is required
          </div>
          <div *ngIf="registrationForm.get('password').hasError('pattern')">
            Password format is invalid.
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>Repeat Password</label>
        <input type="text" class="form-control" formControlName="repeat_password">
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-success btn-block" value="Register">
      </div>
    </form>
  `,
  styles: [`
    form .ng-invalid.ng-touched,
    form .ng-invalid.ng-dirty {
      border: 2px solid red !important;
    }

    form .ng-invalid.ng-touched ~ .validation-feedback,
    form .ng-invalid.ng-dirty ~ .validation-feedback {
      color: red;
    }
  `]
})
export class FormValidationComponent implements OnInit {

  registrationForm = this.form.group({
    username: this.form.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    email: this.form.control('', [
      Validators.required,
      Validators.email
    ]),
    password: this.form.control('', [
      Validators.required,
      Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$')
    ]),
    repeat_password: this.form.control(''),
  });

  checkField(field) {
    return this.registrationForm.get(field).touched || this.registrationForm.get(field).dirty;
  }

  constructor(private form: FormBuilder) {
  }

  ngOnInit() {
  }

}
