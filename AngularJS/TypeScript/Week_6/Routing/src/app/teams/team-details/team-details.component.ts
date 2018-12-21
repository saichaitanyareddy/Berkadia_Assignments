import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,Data} from '@angular/router';
import { ResolverService } from 'src/app/resolver.service';
@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  team:{id:number,Name:string,Captain:string};
  constructor(private route:ActivatedRoute,private ResolverService:ResolverService,privaterouter:Router) { }

  ngOnInit() 
  {
    this.route.data.subscribe((data:Data)=>{
      this.team=data['Team'];
    });
  } 

}
