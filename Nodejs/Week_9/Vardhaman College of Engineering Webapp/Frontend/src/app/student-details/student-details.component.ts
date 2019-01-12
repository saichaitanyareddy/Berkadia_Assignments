import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  rollno="";
  
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
  }
  getDetails(id:string){
      if(id==''){
          alert("enter roll number");
      }
      else{
          this.dataService.getDetails(id).subscribe((res:any)=>{
              this.dataService.profile=res;
              console.log(this.dataService.profile);
              this.router.navigate(['/profile']);
          });
      }  
  }
} 