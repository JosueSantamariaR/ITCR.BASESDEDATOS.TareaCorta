import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminaddUserServices {
  private apiServer = environment.url+"User";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    })
  }
  public refreshcheck=true;
  constructor(private httpClient: HttpClient) {
  }
  
  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiServer)
  }

  getByusernumber(usernumber): Observable<User> {
    return this.httpClient.get<User>(this.apiServer+"/login/"+usernumber, this.httpOptions)
  } 
   
  addflight(user): Observable<User> {
    this.refreshcheck=false;
    return this.httpClient.post<User>(this.apiServer, JSON.stringify(user), this.httpOptions)
  }
}