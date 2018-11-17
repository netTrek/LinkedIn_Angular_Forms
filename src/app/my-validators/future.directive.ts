import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {MyValidators} from './my-validators';

@Directive({
  selector: '[ngModel][inFuture],[formControl][inFuture],[formControlName][inFuture]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef( () => FutureDirective ),
      multi: true
    }
  ]
})
export class FutureDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return MyValidators.isFuture()( control );
  }

}
