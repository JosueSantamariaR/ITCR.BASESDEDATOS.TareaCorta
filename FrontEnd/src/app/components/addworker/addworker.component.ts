import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Worker } from 'src/app/models/worker';
import { AdminaddWorkerServices } from 'src/app/services/adminaddworker.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addworker',
  templateUrl: './addworker.component.html',
  styleUrls: ['./addworker.component.css']
})
export class AddworkerComponent implements OnInit {
  public citydata;
  addworker:Worker;
  flightcheck=true;
  isLoggedIn: boolean;
  constructor(private service:AdminaddWorkerServices, private router: Router) { }

  ngOnInit(): void {
    this.addworker={
      id:null,
      password:'',
      name:'',
      lastname:'',
      rol:'',
    }
 
    this.flightcheck=true;
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
  
  
  
 
  submitForm(AddWorkerForm) {
        
    if(this.flightcheck==true)
    {
      Swal.fire('Adding Worker');    Swal.showLoading();
      this.service.addworker(AddWorkerForm.value).subscribe((data)=>
      console.log(data,"Worker Added")
      )
      Swal.close();
    this.router.navigate([`${'ViewAllFlights'}`]);
    }
   
   }
   
}
