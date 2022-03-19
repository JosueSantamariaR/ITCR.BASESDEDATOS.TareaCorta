import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { FlightdataComponent } from './components/dashboard/flightdata/flightdata.component';
import { CancellationsComponent } from './components/dashboard/cancellations/cancellations.component';
import { RulesComponent} from './components/rules/rules.component';

const routes: Routes = [
  { path: '', component:AdminloginComponent},
  {path : 'flight/user/dashboard', component:FlightdataComponent },
  {path :'flight/rules',component:RulesComponent},
  {path : 'flight/user/dashboard/cancelled', component:CancellationsComponent },
  
  
  {path:'AddWorker', component: AddworkerComponent},
  {path:'AddUser', component: AdduserComponent},
  {path:'AddBag', component: AddbagComponent},
  {path:'AddBagCart', component: AddbagcartComponent},
  {path:'AssignFli', component: AssignfliComponent},
  {path:'AssignBagCart', component: AssignbagcartComponent},
  {path:'CloseBagCart', component: ClosebagcartComponent},
  {path:'PDFReports', component: PdfreportsComponent},
  {path:'ViewAllFlights', component: ViewallflightsComponent},
  {path:'updateflight/:flightnumber', component:UpdateflightComponent},
  {path:'deleteflight/:flightnumber', component:DeleteflightComponent},
 

  { path:'**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
