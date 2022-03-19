import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bag } from '../models/bag';

@Injectable({
  providedIn: 'root'
})
export class AdminadduserServices {
  private apiServer = environment.url+"Bag";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public refreshcheck=true;
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Bag[]> {
    return this.httpClient.get<Bag[]>(this.apiServer)
  }

  getBybagnumber(bagnumber): Observable<Bag> {
    return this.httpClient.get<Bag>(this.apiServer + "/" + bagnumber)
  } 
 
  
  addbag(bag): Observable<Bag> {
    this.refreshcheck=false;
    return this.httpClient.post<Bag>(this.apiServer, JSON.stringify(bag), this.httpOptions)
  }
}