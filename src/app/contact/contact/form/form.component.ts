import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'in-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(NgForm)
  ngForm: NgForm;

  @ViewChild('username')
  username: NgModel;

  startValue = 'Peter Müller';

  searchstring: '';

  private formSub: Subscription;
  private userSub: Subscription;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.ngForm.value);
    console.log(this.username.value);
    this.userSub = this.username.valueChanges.subscribe(
      next => {
        console.log('new username', next);
      }
    );
    this.formSub = this.ngForm.valueChanges.subscribe(
      next => {
        console.log('form updated', next);
      }
    );
  }

  usernameChanged(currentname: string) {
    console.log('currentname', currentname);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    this.formSub.unsubscribe();
  }

  updateName() {
    this.username.control.setValue( 'neuer wert', {
      emitEvent: true,
      emitViewToModelChange: true,
      emitModelToViewChange: true
    } );
  }
}
