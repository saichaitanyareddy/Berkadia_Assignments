import { Component, OnInit } from '@angular/core';
import {AppService}from '../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers:[AppService]
})
export class TeamsComponent implements OnInit {
  teamsList=[];
  
  constructor(private teams:AppService,private router:Router) { }
  
  ngOnInit() {
    this.teamsList=this.teams.teamsList;
  }


}
