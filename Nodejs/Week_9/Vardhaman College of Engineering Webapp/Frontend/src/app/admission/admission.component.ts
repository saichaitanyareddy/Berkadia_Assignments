import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  studentDetails={
    sid:'',
    sname:'',
    bid:0,
    phone:0
  }
  id;name;branch;phone;
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
  }
  onRegister(id:string,name:string,branch:number,phone:number){
    if(id==''||name==''||branch==null||phone==null){
      alert("enter the details before submitting!");
    }
    else{
      this.studentDetails.sid=id;
      this.studentDetails.sname=name;
      this.studentDetails.bid=branch;
      this.studentDetails.phone=phone;
      this.dataService.onRegister(this.studentDetails).subscribe((res:any)=>{
          console.log("data inserted successfully");
          alert("successfully enrolled!\nPlease login to see your details!!");
          this.router.navigate(['/students']);
      });
    }
  } 
}