import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],

})
export class LinkComponent implements OnInit {
@Input('teacherQuestion')teacherQuestion:string;
@Input() teacherClick:Subject<void>;
@Output('Answer') passToTeacher:EventEmitter<string>=new EventEmitter<string>();
questionCount=0;
studentAnswer:string;

  constructor() { }

  ngOnInit() {
    this.teacherClick.subscribe(()=>this.incrementValue());
  }
  incrementValue(){
    this.questionCount=this.questionCount+1;

  }
  sendAnswer(){
    this.passToTeacher.emit(this.studentAnswer);
  }


}
