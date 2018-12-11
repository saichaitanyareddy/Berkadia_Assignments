import { Component, OnInit } from '@angular/core';
import {StudentDetailsService} from './student-details.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StudentDetailsService]
})
export class AppComponent implements OnInit {
  visible="true";
  color="true";
  studentDetails=[];
  
  value="";
  
  constructor(private sdetails:StudentDetailsService){}
  ngOnInit(){
    this.studentDetails=this.sdetails.studentDetails;
  }
 
  
}
