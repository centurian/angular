import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'location-component',
  templateUrl: './location-component.component.html',
  styleUrls: ['./location-component.component.css']
})
export class LocationComponent implements OnInit {

  selected : any;
  favoriteSeason: string;
sites: string[] = ['Company Facility (On-Site) ', 'Other Location (Off-Site)'];

  constructor() { }
  fmLocationRadioBtn = new FormControl('', Validators.required);
  fmCountry = new FormControl('', [Validators.required]);
  fmState = new FormControl('', [Validators.required]);
  fmAdr = new FormControl();
  fmCity = new FormControl('', [Validators.required]);
  fmZip = new FormControl();
  location = new FormControl('', [Validators.required]);


  ngOnInit() {
  }

  countries: DropDown[] = [
    {value: '1', viewValue: 'America'},
    {value: '2', viewValue: 'Argentina'},
    {value: '3', viewValue: 'Australia'},
    {value: '4', viewValue: 'Austria'},
    {value: '5', viewValue: 'Bahrain'},
    {value: '6', viewValue: 'Bangladesh'},
    {value: '7', viewValue: 'Belarus'},
    {value: '8', viewValue: 'Belgium'},
    {value: '9', viewValue: 'Brazil'},
    {value: '10', viewValue: 'Brunei'},
    {value: '11', viewValue: 'Bulgaria'}
  ]

  states:DropDown[] = [
    {value: '1', viewValue: 'AL'},
    {value: '2', viewValue: 'NY'},
    {value: '3', viewValue: 'MA'},
    {value: '4', viewValue: 'RI'},
    {value: '5', viewValue: 'OK'},
    {value: '6', viewValue: 'NJ'}
  ]

}

export interface DropDown{
  value: string;
  viewValue: string;
}


