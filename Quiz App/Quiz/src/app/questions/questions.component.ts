import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions;
  id=0;
  select;
  count=1;//used to display the number of question
  answer={qid:0,
    question:'',
    selected_option:'',
    answer:''
  }
  score=0;//used for calculating percentage

  constructor(private _data:DataService,private _router:Router) { }

  ngOnInit() {
    this._data.getQuestions().subscribe((res:any)=>{
        this.questions=res.data;
        console.log(this.questions);
      },(err)=>{
        console.log(err);
    });
    this._data.attempt++;
  }
 
  next(){   
    //used for saving the current answer and moving to the next question
    if(this.select==null){
      alert("Choose an Option to answer!")
    }
    else{
      this.count++;
      this.answer.qid=this.id;
      this.answer.question=this.questions[this.id].question;
      this.answer.selected_option=this.select;
      this.answer.answer=this.questions[this.id].answer;
      if(this.answer.selected_option==this.answer.answer){
        this.score++;
      }
      this._data.result.push(this.answer);
      if(this._data.random==false){
        this.id=this.id+2;
      }
      else{
        this.id++;
      }
      this.select=null;
      this.answer={qid:0,
        question:'',
        selected_option:'',
        answer:''
      }
    }
  }
  previous(){
    //used to go back to the previous question
    if(this._data.random==false){
      this.id=this.id-2;
    }
    else{
      this.id--;
    }
    this.count--;
    this.score--;
    this._data.result.pop();
    this.select=null;
  }
  submit(){
    //used for submitting the quiz
    if(this.select==null){
      alert("Choose an Option to answer!")
    }
    else{
      this.answer.qid=this.id;
      this.answer.question=this.questions[this.id].question;
      this.answer.selected_option=this.select;
      this.answer.answer=this.questions[this.id].answer;
      if(this.answer.selected_option==this.answer.answer){
        this.score++;
      }
      this._data.result.push(this.answer);
      this._data.report.percentage=(this.score/this.count)*100;
      if(this._data.attempt%2==0){
        this._data.random=false;
      }
      else{
        this._data.random=true;
      }
      this._data.submitQuiz(this._data.report).subscribe((res:any)=>{
        this._router.navigate(['result']);
      },(err)=>{
        console.log(err);
      });
    }
  }
}