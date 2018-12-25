import { Component, OnInit } from '@angular/core';
import { AirService } from '../air.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
  sourceDetails;
  public source;
  constructor(private readonly airApi:AirService) { }

  ngOnInit() {
    this.source=this.airApi.getSource('https://api.openaq.org/v1/sources').subscribe((res:any)=>{
      this.sourceDetails=res.results;
      console.log(this.sourceDetails);
    });
  }

}
