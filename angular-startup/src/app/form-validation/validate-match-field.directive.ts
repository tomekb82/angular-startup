import {Directive, Input, OnDestroy} from '@angular/core';
import {AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Directive({
  selector: '[validateMatchField]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateMatchFieldDirective,
      multi: true
    }
  ]
})
export class ValidateMatchFieldDirective implements Validator, OnDestroy {

  @Input()
  validateMatchField: {
    control: FormControl,
    key: string
  };

  subscription: Subscription;

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value !== this.validateMatchField.control.value) {
      const obj = {};
      obj[`${this.validateMatchField.key}`] = true;
      return obj;
    }
    return null;
  }

  registerOnValidatorChange(callback: () => void) {
    this.subscription = this.validateMatchField.control.valueChanges.subscribe(callback);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor() { }

}
