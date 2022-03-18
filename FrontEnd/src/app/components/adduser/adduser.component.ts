import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AdminaddUserServices } from 'src/app/services/adminadduser.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  adduser:User;
  flightcheck=true;
  isLoggedIn: boolean;
  constructor(private service:AdminaddUserServices, private router: Router) { }

  ngOnInit(): void {
    this.adduser={
      id:null,
      password:'',
      name:'',
      telephone:null
    }
 
    /*this.service.getAll().subscribe((data: Adminflight[])=>{
      this.flights = data;})*/
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
  
  
  
 
  submitForm(AddUserForm) {
    
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