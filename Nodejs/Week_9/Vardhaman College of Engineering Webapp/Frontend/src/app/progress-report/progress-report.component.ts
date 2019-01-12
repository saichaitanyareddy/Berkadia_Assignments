import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress-report',
  templateUrl: './progress-report.component.html',
  styleUrls: ['./progress-report.component.css']
})
export class ProgressReportComponent implements OnInit {
  result;
  
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
    this.result=this.dataService.result;
    console.log(this.result);
  }
  goBack(){
    this.router.navigate(['/results']);
  }
  
}