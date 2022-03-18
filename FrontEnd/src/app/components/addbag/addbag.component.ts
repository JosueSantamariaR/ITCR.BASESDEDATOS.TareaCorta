import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bag } from 'src/app/models/bag';
import { AdminadduserServices } from 'src/app/services/adminaddbag.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addbag',
  templateUrl: './addbag.component.html',
  styleUrls: ['./addbag.component.css']
})
export class AddbagComponent implements OnInit {
  addbag:Bag;
  flightcheck=true;
  isLoggedIn: boolean;
  constructor(private service:AdminadduserServices, private router: Router) { }

  ngOnInit(): void {
    this.addbag={
      id:null,
      cost:null,
      state:true,
      color:'',
      type:'',
      usuario:null
    }
    this.flightcheck=true;
  if(!sessionStorage.getItem('admin'))
    {
      Swal.fire({
        title: 'Oops!',
        text: 'Login to Continue!',
        icon: 'warning',
       
      })
      this.router.navigate([`${'/'}`]);
    }
    if(sessionStorage.getItem('admin'))
    {
        this.isLoggedIn = true
    }
  }
 
  onclickfn()
  {
    this.flightcheck=true;
  }
  
  
  
 
  submitForm(AddFlightForm) {
    
  /*for(let i=0;i<this.flights.length;i++)
  {
    if(this.flights[i].flight_number==AddFlightForm.value.flight_number)
      {
        this.flightcheck=false;
        window.scrollTo(0,1);
      }
  }

  console.log(this.flightcheck);
    
    if(this.flightcheck==true)
    {
      Swal.fire('Adding Flight');    Swal.showLoading();
      this.service.addflight(AddFlightForm.value).subscribe((data)=>
      console.log(data,"Flight Added")
      )
      Swal.close();
    this.router.navigate([`${'ViewAllFlights'}`]);
    }*/
   
   }
   
}
