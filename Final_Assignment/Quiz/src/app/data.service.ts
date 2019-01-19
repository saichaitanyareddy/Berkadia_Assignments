import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  localhost='http://localhost:3000';
  result={
    qid:0,
    selected:'',
    result:'',
    marks:0
  };
  report;
  constructor(private _http:HttpClient) { }

  getQuestion(qid:number){
    return this._http.get(`${this.localhost}/questions?qid=${qid}`);
  }
  onSubmit(details){
    return this._http.post(`${this.localhost}/result`,details);
  }
  getResult(){
    return this._http.get(`${this.localhost}/result`);
  }
}
