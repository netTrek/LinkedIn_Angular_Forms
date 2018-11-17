import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'in-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myForm: FormGroup | FormArray;
  username: FormControl | AbstractControl;
  email: FormControl | AbstractControl;
  msg: FormControl | AbstractControl;
  personalInfo: FormGroup | AbstractControl;

  constructor( private fb: FormBuilder ) {
  }

  ngOnInit() {


    // this.username = new FormControl( '', [
    //   Validators.required, Validators.minLength ( 3 )
    // ] );
    // this.email = new FormControl( '', [
    //   Validators.required, Validators.email
    // ] );
    // this.msg = new FormControl( '' );
    //
    // this.personalInfo = new FormGroup( { name: this.username, email: this.email } );
    //
    // this.myForm = new FormGroup( {
    //   personalInfo: this.personalInfo, msg: this.msg } );

    this.myForm = this.fb.group( {
      personalInfo: this.fb.group( {
        name: ['', [Validators.required, Validators.minLength ( 3 )] ],
        email: ['', [Validators.required, Validators.email ] ],
      }),
      msg: [ '' ]
    });

    this.username = this.myForm.get ( ['personalInfo', 'name'] ) ;
    this.email = this.myForm.get ( ['personalInfo', 'email'] ) ;
    this.msg = this.myForm.get ( ['msg'] ) ;
    this.personalInfo = this.myForm.get ( ['personalInfo'] ) ;

  }

}
