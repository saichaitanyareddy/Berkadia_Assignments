import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result;
  percentage;
  constructor(private readonly _data:DataService,private readonly _router:Router) { }

  ngOnInit() {
    this.result=this._data.result;
    this.percentage=this._data.report.percentage;
    console.log(this.result);
    this._data.result=[];
  }
  goToHome(){
    this._router.navigate(['/']);
  }
}