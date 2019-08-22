import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';

@Component({
  selector: 'follow-up-report',
  templateUrl: './follow-up-report.component.html',
  styleUrls: ['./follow-up-report.component.css']
})
export class FollowUpReportComponent implements OnInit {


  fmKey = new FormControl('', Validators.required);
  fmBtn = new FormControl('');
  show:Boolean = false;
  constructor() { }

  ngOnInit() {
  }


  toggle() {
   
      this.show = !this.show;
      console.log("DIV is clicked!");  
     
   

    console.log((this.fmKey.value == null))
    console.log(this.fmKey.value)
  }

}
