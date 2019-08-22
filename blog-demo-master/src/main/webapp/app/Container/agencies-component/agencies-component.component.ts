import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
@Component({
  selector: 'agencies-component',
  templateUrl: './agencies-component.component.html',
  styleUrls: ['./agencies-component.component.css']
})

@Injectable()
export class AgenciesComponent implements OnInit {

  fmAgeName = new FormControl('', Validators.required);
  fmType = new FormControl('', Validators.required);
  fmReportCase = new FormControl('');
  fmAddrs = new FormControl('');
  fmCity = new FormControl('');
  fmState = new FormControl('');
  fmZip = new FormControl('');
  fmPrefix = new FormControl('');
  fmFname = new FormControl('', Validators.required);
  fmMi = new FormControl('');
  fmLname = new FormControl('', Validators.required);
  fmBadge = new FormControl('');
  fmPhone = new FormControl('');
  fmPhoneAlt = new FormControl('');
  email = new FormControl('', [Validators.required, Validators.email]);


  favoriteChoice: string;
  choices: string[] = ['Yes', 'No', 'Unknown'];

  agencies:Agency[]=[];

  types: DropDown[] = [
    {value: '1', viewValue: 'Carrier'}
  ]

  prefixs: DropDown[] =[
    {value:'1', viewValue:' '},
    {value:'2', viewValue:'Mr.'},
    {value:'3', viewValue:'Ms.'},
    {value:'4', viewValue:'Mrs.'},
    {value:'5', viewValue:'Dr.'}
  ]

  states: DropDown[] =[
    {value:'1', viewValue:'AL'},
    {value:'2', viewValue:'AK'},
    {value:'3', viewValue:'AK'},
    {value:'4', viewValue:'CL'},
    {value:'5', viewValue:'NY'},
    {value:'6', viewValue:'PA'},
  ]

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email: (Format: username@domain.com)' :
            '';
  }

}

export class Agency{
  id: number;
  agencyName: string;
  type: string;
  reportCase: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  prefix: string;
  fName: string;
  mInitial: string;
  lName: string;
  badgeId: string;
  prefPhone: string;
  altPhone: string;
  email: string;

}

export interface DropDown{
  value: string;
  viewValue: string;
}
