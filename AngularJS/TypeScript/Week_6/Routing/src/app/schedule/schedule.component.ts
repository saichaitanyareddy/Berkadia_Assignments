import { Component, OnInit } from '@angular/core';
import {AppService}from '../app.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers:[AppService]
})
export class ScheduleComponent implements OnInit {
  scheduleDetails=[];
  constructor(private schedule:AppService) { }

  ngOnInit() {
    this.scheduleDetails=this.schedule.scheduleDetails;
  }

}
