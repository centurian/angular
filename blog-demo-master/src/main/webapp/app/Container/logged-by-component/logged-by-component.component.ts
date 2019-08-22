import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'logged-by-component',
  templateUrl: './logged-by-component.component.html',
  styleUrls: ['./logged-by-component.component.css']
})

export class LoggedByComponent implements OnInit {
  
    constructor() { }

    fmName = new FormControl('', [Validators.required]);
    fmlName = new FormControl('', Validators.required);
    fmBadge = new FormControl();
    fmLocation = new FormControl('', Validators.required);
    fmPhone = new FormControl('', Validators.required);
    email = new FormControl('', [Validators.required, Validators.email]);

    ngOnInit() {
    
    }

    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a valid email' :
            this.email.hasError('email') ? 'Not a valid email: (Format: username@domain.com)' :
                '';
      }
}