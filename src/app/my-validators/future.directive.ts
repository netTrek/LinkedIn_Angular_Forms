import {Directive} from '@angular/core';
import {AbstractControl, ValidationErrors, Validator} from '@angular/forms';
import {MyValidators} from './my-validators';

@Directive({
  selector: '[inFuture]'
})
export class FutureDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return MyValidators.isFuture()( control );
  }

}
