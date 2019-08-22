import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'submit-component',
  templateUrl: './submit-component.component.html',
  styleUrls: ['./submit-component.component.css']
})
export class SubmitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

selected : any;
fmCancel = new FormControl('');

}
