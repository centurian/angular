import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';

@Component({
  selector: 'vechicles-component',
  templateUrl: './vechicles-component.component.html',
  styleUrls: ['./vechicles-component.component.css']
})

@Injectable()
export class VechiclesComponent implements OnInit {

  
  favoriteChoice: string;
  choices: string[] = ['Yes', 'No', 'Unknown'];
  vehicles:Vehicles[]=[];

  fmOwner = new FormControl('', Validators.required);
  fmOwnerName = new FormControl('');
  fmMake = new FormControl('');
  fmModel = new FormControl('');
  fmStyle = new FormControl('');
  fmYear = new FormControl('');

  fmColor = new FormControl('');
  fmPlate = new FormControl('');
  fmStateCountry = new FormControl('');
  fmVIN = new FormControl('');

  fmDescription = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit() {
  }


  owners: DropDown[] =[
    {value:'1', viewValue:'Company (Owned)'},
    {value:'2', viewValue:'Company (Leased)'},
    {value:'3', viewValue:'Rental'},
    {value:'4', viewValue:'Customer'},
    {value:'5', viewValue:'Suspect'},
    {value:'5', viewValue:'Other'}
  ]
}

export class Vehicles{
  id: number;
  owner: string;
  ownerName: string;
  make: string;
  model: string;
  style: string;
  year: string;
  color: string;
  plate: string;
  stateOrCountry: string;
  vin: string;
  description: string;
}


export interface DropDown{
  value: string;
  viewValue: string;
}

