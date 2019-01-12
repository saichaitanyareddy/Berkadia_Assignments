import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
    localhost='http://localhost:3000';
    result;
    profile;
    search;
    constructor(private http:HttpClient) { }
    getResult(id:string){
    return this.http.get(`${this.localhost}/results?sid=${id}`);
    }
    onRegister(details:any){
      return this.http.post(`${this.localhost}/students`,details);
    }
    getDetails(id:string){
      return this.http.get(`${this.localhost}/students?sid=${id}`);
    }
    getBranches(){
      return this.http.get(`${this.localhost}/branch`);
    }
    onSearch(id:number){
      return this.http.get(`${this.localhost}/search?bid=${id}`);
    }

}
