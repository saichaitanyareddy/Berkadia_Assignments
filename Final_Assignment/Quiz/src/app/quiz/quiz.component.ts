import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  question;
  answer;
  proceed=true;
  id=1;
  result;
  constructor(private readonly _dataService:DataService,private _router:Router) { }

  ngOnInit() {
   
  }
  onStart(){
    this._dataService.getQuestion(this.id).subscribe((res:any)=>{
    this.question=res;
    this._dataService.result.qid=this.id;
    this.id=this.id+1;
    console.log(res);
    },(err)=>{
      console.log(err);
    });
  }

  
  selectedOption(event:any){
    this.answer=event.target.value;
    console.log(this.answer);
    this._dataService.result.selected=this.answer;
    if(this.question.answer==this._dataService.result.selected){
      this._dataService.result.result="correct";
      this._dataService.result.marks=1;
    }
    else{
      this._dataService.result.result="wrong";
      this._dataService.result.marks=0;
    }
    this.proceed=false;
    event.target.value=null;
     
  }
  onSubmit(qid:number){
    if(qid==5){
        this._dataService.onSubmit(this._dataService.result).subscribe((res)=>{
          console.log(res);
        },(err)=>{
          console.log(err);
      });
      this._dataService.getResult().subscribe((res:any)=>{
        this.result=res;
        this._dataService.report=res;
        console.log(res);
        
      });
      
    }
    else{
      this._dataService.onSubmit(this._dataService.result).subscribe((res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
    });
    this.onStart();
    } 
  }
  onClose(){
    this._router.navigate(['/result']);
  }
}