import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, FormGroup, FormBuilder,NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'reported-by-component',
  templateUrl: './reported-by-component.component.html',
  styleUrls: ['./reported-by-component.component.css']
})

export class ReportedByComponent implements OnInit {

  
  fmRadioBtn = new FormControl('', Validators.required);
  fmOtherRelation = new FormControl('', Validators.required);


fmRelation = new FormControl('', Validators.required);
fmName = new FormControl('', Validators.required);
fmlName = new FormControl('', Validators.required);
fmlOther = new FormControl('', Validators.required);
fmPhone = new FormControl();
email = new FormControl('', [Validators.required, Validators.email]);
  
  selected : any;
  favoriteSeason: string;
seasons: string[] = ['Yes', 'No'];
  constructor() { }

  ngOnInit() {
  }
 
  relations: DropDown[] =[
    {value: '1', viewValue: ' Business Partner/Agent'},
    {value: '2', viewValue: 'Contractor'},
    {value: '3', viewValue: 'Customer'},
    {value: '4', viewValue: 'Employee'},
    {value: '5', viewValue: 'Former Contractor'},
    {value: '6', viewValue: 'Former Employee'},
    {value: '7', viewValue: 'Informant'},
    {value: '8', viewValue: 'Intern'},
    {value: '9', viewValue: 'Regulator/Government Agency'},
    {value: '10', viewValue: 'Spouse/Relative of Employee'},
    {value: '11', viewValue: 'Vendor/Supplier/External Dell Partner'},
    {value: '12', viewValue: 'Unknown'},
    {value: '13', viewValue: 'Other'}
  
  ]

  
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value (Format: username@domain.com)' :
        this.email.hasError('email') ? 'Not a valid email: (Format: username@domain.com)' :
            '';
  }

}

export interface DropDown{
  value: string;
  viewValue: string;
}

