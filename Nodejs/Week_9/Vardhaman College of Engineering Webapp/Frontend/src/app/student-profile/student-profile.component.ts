import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  result;
  profile;
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
    this.profile=this.dataService.profile[0];
    this.result=this.profile;
    console.log(this.result);
  }
  goBack(){
    this.router.navigate(['/students']);
  }

}
