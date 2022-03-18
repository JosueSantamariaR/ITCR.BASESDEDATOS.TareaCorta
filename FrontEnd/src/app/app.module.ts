import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';

import { HttpClientModule } from '@angular/common/http';

import { AddworkerComponent } from './components/addworker/addworker.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AddbagComponent } from './components/addbag/addbag.component';
import { AddbagcartComponent } from './components/addbagcart/addbagcart.component';
import { AssignbagcartComponent } from './components/assignbagcart/assignbagcart.component';
import { AssignfliComponent } from './components/assignfli/assignfli.component';
import { ClosebagcartComponent } from './components/closebagcart/closebagcart.component';
import { PdfreportsComponent } from './components/pdfreports/pdfreports.component';
import { DeleteflightComponent } from './components/deleteflight/deleteflight.component';
import { UpdateflightComponent } from './components/updateflight/updateflight.component';
import { ViewallflightsComponent } from './components/viewallflights/viewallflights.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


import {Confirmvalidator} from '../app/shared/confirmvalidator.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FlightdataComponent } from './components/dashboard/flightdata/flightdata.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { LoggedinheaderComponent } from './components/loggedinheader/loggedinheader.component';
import { CancellationsComponent } from './components/dashboard/cancellations/cancellations.component';
import { RulesComponent } from './components/rules/rules.component'
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { AdminfooterComponent } from './components/adminfooter/adminfooter.component';
import { AdminloggedinheaderComponent } from './components/adminloggedinheader/adminloggedinheader.component';

@NgModule({
  declarations: [
    AppComponent,
    Confirmvalidator,
    AddworkerComponent,
    AdduserComponent,
    AddbagComponent,
    AddbagcartComponent,
    AssignbagcartComponent,
    AssignfliComponent,
    ClosebagcartComponent,
    PdfreportsComponent,
    DeleteflightComponent,
    UpdateflightComponent,
    ViewallflightsComponent,
    AdminloginComponent,

    PageNotFoundComponent,
  
    FlightdataComponent,
    SidebarComponent,
    LoggedinheaderComponent,
    CancellationsComponent,
    RulesComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminloggedinheaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,  
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatChipsModule,
    HttpClientModule,
    Ng2SearchPipeModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
