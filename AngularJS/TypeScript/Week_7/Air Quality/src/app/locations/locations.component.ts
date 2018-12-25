import { Component, OnInit } from '@angular/core';
import { AirService } from '../air.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  public location;
  locationDetails;
  latest;
  latestDetails;
  selected_location;
  constructor(private readonly airApi:AirService) { }

  ngOnInit() {
    this.location=this.airApi.getLocation('https://api.openaq.org/v1/locations?country[]=IN').subscribe((res:any)=>{
      this.locationDetails=res.results;
      console.log(this.locationDetails);
    })
  }
  getLatestDetails(location){
      this.selected_location=location;
      this.latest=this.airApi.getLatest(`https://api.openaq.org/v1/latest?location=${location}`).subscribe((res:any)=>{
      this.latestDetails=res.results[0];
      console.log(this.latestDetails);
    });
  }

}
