import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Worker } from '../models/worker';

@Injectable({
  providedIn: 'root'
})
export class AdminaddWorkerServices {
  private apiServer = environment.url+"Worker";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    })
  }
  public refreshcheck=true;
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Worker[]> {
    return this.httpClient.get<Worker[]>(this.apiServer)
  }

  getByworkernumber(workernumber): Observable<Worker> {
    return this.httpClient.get<Worker>(this.apiServer+"/"+workernumber)
  } 
   
  addworker(worker): Observable<Worker> {
    this.refreshcheck=false;
    return this.httpClient.post<Worker>(this.apiServer, JSON.stringify(worker), this.httpOptions)
  }
}