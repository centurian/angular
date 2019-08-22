import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
// import {DataSource} from '@Angular/cdk/collections';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ɵHttpInterceptingHandler } from '@angular/common/http';


@Component({
  selector: 'participants-component',
  templateUrl: './participants-component.component.html',
  styleUrls: ['./participants-component.component.css']
})

@Injectable()
export class ParticipantsComponent implements OnInit {

favoriteSeason: string;
seasons: string[] = ['Yes', 'No', 'Unknown'];

fmRole = new FormControl('', Validators.required);
fmRelation = new FormControl('', Validators.required);
fmName = new FormControl('', Validators.required);
fmlName = new FormControl('', Validators.required);
fmTitle = new FormControl('');
fmBadge = new FormControl('');
fmPhone = new FormControl();
email = new FormControl('');
index:number;

selectedRole: string = '';
selcteedRelationShip = '';

participants:Participant[]=[];

constructor() { }

  ngOnInit() {

    this.index = 1;

}

  getErrorMessage() {
    return this.email.hasError('required') ? '' :
        this.email.hasError('email') ? '(Format: username@domain.com)' :
            '';
  }

  addParticipant(){
    this.participants.push({
      id: this.index++,
      fName: this.fmName.value,
      lName: this.fmlName.value,
        role: this.selectedRole,
        relationShip: this.selcteedRelationShip,
        phoneNumber: this.fmPhone.value,
        email:this.email.value
    })

    console.log('index value' + this.index)
  }

  SelectChangeRelationHandler(val: any){
    this.selcteedRelationShip = val.viewValue;
  }

  SelectChangeRoleHandler(val: any){
    this.selectedRole = val.viewValue;
  }

  roles: DropDown[] =[
    {value: '1', viewValue: 'Main Subject'},
    {value: '2', viewValue: 'Additional Subject'}
  
  ]

  relationShips: DropDown[] =[
    {value: '1', viewValue: 'Business Partner/Agent'},
    {value: '2', viewValue: 'Contractor'},
    {value: '2', viewValue: 'Customer'},
    {value: '2', viewValue: 'Employee'},
    {value: '2', viewValue: 'Former Employee'},
    {value: '2', viewValue: 'Other/Unknown'}
  
  ]

}
export interface DropDown{
  value: string;
  viewValue: string;
}

export class Participant{
  id: number;
  fName: string;
  lName: string;
  role: string;
  relationShip: string;
  phoneNumber: string;
  email: string;
}
