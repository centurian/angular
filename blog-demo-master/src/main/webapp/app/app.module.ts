import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { MyNavComponent } from './my-nav/my-nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { LayoutModule } from '@angular/cdk/layout';
import { LayoutModule } from './layout/layout.module';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,MatSelectModule, MatListModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { LoggedByComponent } from './Container/logged-by-component/logged-by-component.component';
import { ReportedByComponent } from './Container/reported-by-component/reported-by-component.component';
import { LocationComponent } from './Container/location-component/location-component.component';
import { DetailsComponent } from './Container/details-component/details-component.component';
import { ParticipantsComponent } from './Container/participants-component/participants-component.component';
import { AgenciesComponent } from './Container/agencies-component/agencies-component.component';
import { VechiclesComponent } from './Container/vechicles-component/vechicles-component.component';
import { FollowUpComponent } from './Container/follow-up-component/follow-up-component.component';
import { SubmitComponent } from './Container/submit-component/submit-component.component';
import { AllComponent } from './Container/all/all.component';
//import { HeaderComponent } from './layout/header/header.component';
//import { FooterComponent } from './layout/footer/footer.component';
import { FollowUpReportComponent } from './follow-up-report/follow-up-report.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavTestComponent } from './nav-test/nav-test.component';

const appRoutes: Routes = [
  { path: 'All', component: AllComponent },
  { path: 'Logged-By', component: LoggedByComponent },
  { path: 'Reported-By', component: ReportedByComponent },
  { path: 'Location', component: LocationComponent  },
  { path: 'Details', component: DetailsComponent  },
  { path: 'Participants', component: ParticipantsComponent  },
  { path: 'Agencies', component: AgenciesComponent  },
  { path: 'Vechicles', component: VechiclesComponent  },
  { path: 'Follow-Up', component: FollowUpComponent  },
  { path: 'Submit', component: SubmitComponent  },
  { path: 'FollowUP', component: FollowUpReportComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    LoggedByComponent,
    ReportedByComponent,
    LocationComponent,
    DetailsComponent,
    ParticipantsComponent,
    AgenciesComponent,
    VechiclesComponent,
    FollowUpComponent,
    SubmitComponent,
    AllComponent,
   // HeaderComponent,
    //FooterComponent,
    FollowUpReportComponent,
   NavTestComponent
  ],
  imports: [
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [
   { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }

//platformBrowserDynamic().bootstrapModule(AppModule);
