import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  teacher:string;
  teacherClick:Subject<void>=new Subject<void>();
  studentAnswer:string;
  onAsk(){
    this.teacherClick.next();
  }
  updateInStudentValue(event){
    this.studentAnswer=event;
  }
}
