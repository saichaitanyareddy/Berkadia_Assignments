import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AirService {

  constructor(private readonly http:HttpClient) { }
  getData(apiURL:string){
    return this.http.get(apiURL);
  }
  getCity(apiURL:string){
    return this.http.get(apiURL);
  }
  getMeasurement(apiURL:string){
    return this.http.get(apiURL);
  }
  getParameter(apiURL:string){
    return this.http.get(apiURL);
  }
  getSource(apiURL:string){
    return this.http.get(apiURL);
  }
  getLocation(apiURL:string){
    return this.http.get(apiURL);
  }
  getLatest(apiURL:string){
    return this.http.get(apiURL);
  }
 
}
