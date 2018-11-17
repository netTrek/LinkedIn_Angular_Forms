import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class MyValidators {
  static readonly isFuture: (condition?: Date) => ValidatorFn =
    (condition?: Date): ValidatorFn => (control: AbstractControl): ValidationErrors | null => {
    if (control.value === null) {
      return null;
    }
    const selected = new Date(control.value);
    const now = !!condition ? condition : new Date();
    const isFuture = selected > now;
    return !isFuture ? {'future': {now, selected}} : null;
  }
}
