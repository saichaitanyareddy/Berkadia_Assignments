import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elastic-search-results',
  templateUrl: './elastic-search-results.component.html',
  styleUrls: ['./elastic-search-results.component.css']
})
export class ElasticSearchResultsComponent implements OnInit {
  searchResults;
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
    this.searchResults=this.dataService.search;
    console.log(this.searchResults);
  }
  goBack(){
    this.router.navigate(['/search']);
  }
}
