import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  random=false;
  attempt=0;
  result=[];
  report={
    name:'',
    percentage:0
  }
  localhost="http://localhost:3000";

  constructor(private _http:HttpClient) { }
  getQuestions(){
    return this._http.get(`${this.localhost}/questions`);
  }
  submitQuiz(answers){
    return this._http.post(`${this.localhost}/result`,answers);
  }
}
