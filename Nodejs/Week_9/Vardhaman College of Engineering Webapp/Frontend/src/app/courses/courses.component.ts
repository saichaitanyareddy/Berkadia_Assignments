import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  branchDetails;
  branches;
  
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.branchDetails=this.dataService.getBranches().subscribe((res:any)=>{
      this.branches=res;
      console.log(this.branches);
    });
  }
}
