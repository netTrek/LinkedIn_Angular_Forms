import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'in-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  @ViewChild ( NgForm )
  ngForm: NgForm;

  @ViewChild ( 'username' )
  username: NgModel;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log ( this.ngForm.value );
    console.log ( this.username.value );
  }

}
