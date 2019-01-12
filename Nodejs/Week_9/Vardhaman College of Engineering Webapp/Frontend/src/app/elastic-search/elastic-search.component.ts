import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elastic-search',
  templateUrl: './elastic-search.component.html',
  styleUrls: ['./elastic-search.component.css']
})
export class ElasticSearchComponent implements OnInit {
  bid;
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
  }
  onSearch(id:number){
      if(id==null){
        alert("enter branch code");
      }
      else{
          this.dataService.onSearch(id).subscribe((res:any)=>{
              this.dataService.search=res;
              console.log(this.dataService.search);
              this.router.navigate(['/searchResults']);
          });
      }
  }
}
