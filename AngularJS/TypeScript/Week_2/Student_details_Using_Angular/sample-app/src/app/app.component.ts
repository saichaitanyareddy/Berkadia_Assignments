import { Student} from './Student_interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
 
  Student_details:Student[]=
  [
      {Roll_no:1,Name:"Sai",Marks:100},
      {Roll_no:2,Name:"chaitanya",Marks:90},
      {Roll_no:3,Name:"Madhu",Marks:100},
      {Roll_no:4,Name:"Hari",Marks:80},
      {Roll_no:5,Name:"Pradeep",Marks:75}
  ];
}


