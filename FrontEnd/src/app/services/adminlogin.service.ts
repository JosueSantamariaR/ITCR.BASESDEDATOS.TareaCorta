import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  //private apiServer = environment.url + "AdminLogin";
  private apiServer = "http://b61a-181-194-162-45.ngrok.io/User";
  private respuesta:User;
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
constructor(private httpClient: HttpClient) { }
async login(data:any)
{
  try 
  {
    /*let respuesta = new User();
    await this.httpClient.get<User>(this.apiServer).subscribe((res: User) => this.respuesta = {id: res.id,
                                                                                          name: res.name,
                                                                                          password: res.password,
                                                                                          telephone: res.telephone});
    //let a = await this.httpClient.get(this.apiServer,data,this.httpOptions);
     //return "Verified"
    console.log(this.respuesta);*/
    return "Verified"
  }
  catch(error)
  {
    if(error.status == 400)
        return "Invalid Credentials"
  }
}
}
