import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result;
  constructor(private _dataService:DataService) { }

  ngOnInit() {
    this.result=this._dataService.report;
  }

}
