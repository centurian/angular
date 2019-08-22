import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponent implements OnInit {
  fmIncident = new FormControl('', Validators.required);
  fmClassific = new FormControl('', Validators.required);
  fmOrigin = new FormControl('', Validators.required);
  fmDestination = new FormControl('', Validators.required);
  fmCarrier = new FormControl('', Validators.required);
  fmCarrierLists = new FormControl('', Validators.required);
  fmShipment =  new FormControl();
  fmLossValue = new FormControl();
  fmRecovery = new FormControl('', Validators.required);

  fmModeTransport = new FormControl('', Validators.required);
  fmIncType = new FormControl('', Validators.required);

  fmlblDell_chk = new FormControl('');
  fmlblEMC_chk = new FormControl('');
  fmlblVendor_chk = new FormControl('');

  fmSummary = new FormControl('', Validators.required);
  fmFullSummary = new FormControl('', Validators.required);

  selected : any;
  evaluationRuleField = new FormControl('', Validators.required);
  evaluationRuleFieldC = new FormControl('', Validators.required);

  fmTrackRadioBtn = new FormControl('', Validators.required);



  timeFrame: string;
  tFrames: string[] = ['Began and ended on the same date/time',
                      'An exact date/timeframe is not known.'];
  favoriteSeason: string;
  tracks: string[] = ['Secure ',
                     'Unsecure'];
  constructor() { }

  ngOnInit() { }

  incidents: DropDown[] =[
    {value: '1', viewValue: 'Cargo Theft'},
    {value: '2', viewValue: 'Mode of Transport'},
    {value: '3', viewValue: 'BOLO Issued'}
  
  ]

  cargoThefts: DropDown[] = [
    {value: '1', viewValue: 'Hijack – Unarmed'},
    {value: '2', viewValue: 'Hijack – Armed'},
    {value: '3', viewValue: 'Pilferage – from Truck/Trailer/Container'},
    {value: '4', viewValue: 'Pilferage – from Airline Pallet/Igloo'},
    {value: '5', viewValue: 'Pilferage – from box/pallet'},
    {value: '6', viewValue: 'Stolen Load'},
    {value: '7', viewValue: 'Facility – Break-in/Robbery'},
    {value: '8', viewValue: 'Facility – Armed Robbery'},
    {value: '9', viewValue: 'Facility – Internal Theft by Employee'},
    {value: '10', viewValue: 'Fictitious Pick-up'},
    {value: '11', viewValue: 'Seal Discrepancy'},
    {value: '12', viewValue: 'Final Mile – Vehicle Theft'},
    {value: '13', viewValue: 'Final Mile – Vehicle Break-in'},
    {value: '14', viewValue: 'Final Mile – Driver Attacked & Goods Stolen'},
    {value: '15', viewValue: 'Preventative Measures Taken – Incident Avoided'},
  ]


  
  modeTransports: DropDown[] = [
    {value: '1', viewValue: 'Oceans'},
    {value: '2', viewValue: 'Air'},
    {value: '3', viewValue: 'Road'},
    {value: '4', viewValue: 'Final Mile'},
    {value: '5', viewValue: 'Facility'},
    {value: '6', viewValue: 'Rail'},
  ]

  carriers: DropDown[]=[
    {value: '1', viewValue: 'AG Logistics'},
    {value: '2', viewValue: 'Assist Cargo'},
    {value: '3', viewValue: 'Buick'},
    {value: '4', viewValue: 'CDIRS'},
    {value: '5', viewValue: 'CEVA'},
    {value: '6', viewValue: 'CH Robinson'},
    {value: '7', viewValue: 'Champagne'},
    {value: '8', viewValue: 'CraneW'},
    {value: '9', viewValue: 'DB Schenker'},
    {value: '10', viewValue: 'DHL'},
    {value: '11', viewValue: 'Expeditors'},
    {value: '12', viewValue: 'JB Hunt'},
    {value: '13', viewValue: 'K&N'},
    {value: '14', viewValue: 'Logisticar'},
    {value: '15', viewValue: 'Nunner'},
    {value: '16', viewValue: 'ODFL'},
    {value: '17', viewValue: 'Plimor'},
    {value: '18', viewValue: 'Purolator'},
    {value: '19', viewValue: 'Schneider'},
    {value: '20', viewValue: 'Syncreon'},
    {value: '21', viewValue: 'T-21'},
    {value: '22', viewValue: 'TA'},
    {value: '23', viewValue: 'TNL'},
    {value: '24', viewValue: 'TNT'},
    {value: '25', viewValue: 'Transmex'},
    {value: '26', viewValue: 'Transportes Juarez'},
    {value: '27', viewValue: 'UPS'},
    {value: '28', viewValue: 'WHI'},
    {value: '29', viewValue: 'Saia'},
    {value: '30', viewValue: 'Road Runner'},
    {value: '31', viewValue: 'XPO'},
    {value: '32', viewValue: 'Transportadores Americana'},
    {value: '33', viewValue: 'YCH Logistics'},
    {value: '34', viewValue: 'China Post'},
    {value: '35', viewValue: 'TMS'},
    {value: '36', viewValue: 'KWE'},
    {value: '37', viewValue: 'Overhaul'},
    {value: '38', viewValue: 'Pegasus Logistics'},
    {value: '39', viewValue: 'Others'}
  ]


}

export interface Incident{
  value: string;
  viewValue: string;
}

export interface CargoTheft{
  value: string;
  viewValue: string;
}

export interface ModeTransport{
  value: string;
  viewValue: string;
}

export interface DropDown{
  value: string;
  viewValue: string;
}
