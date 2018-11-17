import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FutureDirective } from './future.directive';

@NgModule({
  declarations: [FutureDirective],
  imports: [
    CommonModule
  ],
  exports: [FutureDirective]
})
export class MyValidatorsModule { }
