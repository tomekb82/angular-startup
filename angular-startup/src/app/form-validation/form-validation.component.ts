import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Validator} from '../model/validator';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';

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
          <div *ngIf="registrationForm.get('username').hasError('invalid-username')">
            Username is taken or invalid
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
        <!--  <div *ngIf="registrationForm.get('password').hasError('pattern')">
            Password format is invalid.
          </div>-->
          <div *ngIf="registrationForm.get('password').getError('password') as error">
            Password has to contain
            <div *ngIf="error.lowercase"> - lowercase letters </div>
            <div *ngIf="error.uppercase"> - uppercase letters </div>
            <div *ngIf="error.number"> - numbers </div>
            <div *ngIf="error.special"> - special characters </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>Repeat Password</label>
        <input type="text" class="form-control" 
               formControlName="repeat_password"
               [validateMatchField]="{control: registrationForm.get('password'), key: 'password_match'}"
               >
        <div class="validation-feedback" *ngIf="checkField('repeat_password')">
          <div *ngIf="registrationForm.get('repeat_password').hasError('password_match')">
            Passwords must match
          </div>
        </div>
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
    ], [
      this.validateUsername
    ]),
    email: this.form.control('', [
      Validators.required,
      Validators.email
    ]),
    password: this.form.control('', [
      Validators.required,
      this.validatePassword({
        lowercase: true,
        uppercase: true,
        number: true,
        special: true
      })
      //Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$')
    ]),
    repeat_password: this.form.control(''),
  });

  checkField(field) {
    return this.registrationForm.get(field).touched || this.registrationForm.get(field).dirty;
  }

  validateUsername<AsyncValidatorFn>(control: FormControl) {
    const {value} = control;

    return Observable.create( (observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        const notAllowed = ['admin', 'user'];
        const notValid = notAllowed.includes(value);
        const result = notValid ? {
          'invalid-username': value
        } : null;
        observer.next(result);
        observer.complete();
      }, 2000);
    });
  }

  validatePassword(options: Validator): ValidatorFn {
    return (control: FormControl) => {
      const {value} = control;
      const {lowercase, uppercase, number, special} = options;

      const hasUppercase = value.match(/[A-Z]/);
      const hasLowercase = value.match(/[a-z]/);
      const hasNumber = value.match(/[\d]/);
      const hasSpecial = value.match(/[\W]/);

      const errors: Validator = {};
      let valid = true;

      if (lowercase && !hasLowercase) {
        errors.lowercase = true;
        valid = false;
      }
      if (uppercase && !hasUppercase) {
        errors.uppercase = true;
        valid = false;
      }
      if (number && !hasNumber) {
        errors.number = true;
        valid = false;
      }
      if (special && !hasSpecial) {
        errors.special = true;
        valid = false;
      }

      return valid ? null : {
        'password': errors
      };
    };
  }

  constructor(private form: FormBuilder) {
  }

  ngOnInit() {
  }

}
