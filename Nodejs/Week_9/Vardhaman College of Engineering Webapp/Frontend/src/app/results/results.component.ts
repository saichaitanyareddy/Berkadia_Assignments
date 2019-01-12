import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  rollno="";
  constructor(private dataServcie:DataService,private router:Router) { }

  ngOnInit() {
  }
  getResult(id:string){
      if(id==''){
        alert("Enter Roll number to get Results");
      }
      else{
          this.dataServcie.getResult(id).subscribe((res:any)=>{
              this.dataServcie.result=res;
              console.log(this.dataServcie.result);
              this.router.navigate(['/report']);
          });
      } 
  }
}