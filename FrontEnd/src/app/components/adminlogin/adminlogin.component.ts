import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { AdminloginService } from 'src/app/services/adminlogin.service';
import { AdminaddUserServices } from 'src/app/services/adminadduser.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  verify=true;
  yes;
  public adminlogin;
  public response: string
  public timer : boolean
  constructor(private loginservice:AdminloginService, private userservice:AdminaddUserServices, private router: Router) { }
  faEyeSlash = faEyeSlash;
  faEye=faEye;
  visible = false;
  users:User;
  ngOnInit(): void {
    this.adminlogin={
      email:'',
      password:''
    };
  }
  clickoninput()
  {
    this.verify=true;
  }
  onClick()
  {
    this.visible = !this.visible;
  }
  async submitForm(AdminLoginForm)
  {
    console.log(AdminLoginForm.value.email);

    await this.userservice.getByusernumber(AdminLoginForm.value.email).subscribe((data: User)=>{
      this.users = data;
    })

    this.timer = true;
    this.verify=true;
    this.router.navigate([`${'ViewAllFlights'}`]);
    sessionStorage.setItem('admin',AdminLoginForm.value.email);
    /*//let response = await this.loginservice.login(AdminLoginForm.value)
    if(this.users != null){
      if(this.users.password == AdminLoginForm.value.password)
        {
          this.router.navigate([`${'ViewAllFlights'}`]);
          sessionStorage.setItem('admin',AdminLoginForm.value.email)

        }
      else 
        {
          this.verify=false;
        }
      setTimeout(() => {
        this.timer = false
      },3000)
    }else
    {
      this.verify=false;
    }*/
  }
}
