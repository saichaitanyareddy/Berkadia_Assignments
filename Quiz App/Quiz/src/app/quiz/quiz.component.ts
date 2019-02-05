import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  name;
  constructor(private readonly _data:DataService,private readonly _router:Router) { }

  ngOnInit() {
  }
  onStart(){
    if(this.name==null){
      alert("Enter your name!");
    }
    else{
      this._data.report.name=this.name;
      this._router.navigate(['/questions']);
    }
  }
}