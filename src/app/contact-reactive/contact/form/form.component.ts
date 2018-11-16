import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'in-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;
  username: FormControl;
  email: FormControl;
  msg: FormControl;
  personalInfo: FormGroup;

  constructor() {
  }

  ngOnInit() {

    this.username = new FormControl( '', [
      Validators.required, Validators.minLength ( 3 )
    ] );
    this.email = new FormControl( '', [
      Validators.required, Validators.email
    ] );
    this.msg = new FormControl( '' );

    this.personalInfo = new FormGroup( { name: this.username, email: this.email } );

    this.myForm = new FormGroup( {
      personalInfo: this.personalInfo, msg: this.msg } );

  }

}
