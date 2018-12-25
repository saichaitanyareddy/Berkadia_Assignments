import { Component, OnInit } from '@angular/core';
import { AirService } from '../air.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  public city;
  cityDetails;
  location;
  locationDetails;
  selected_city:string;
  constructor(private readonly airApi:AirService) { }

  ngOnInit() {
      this.city=this.airApi.getCity('https://api.openaq.org/v1/cities?country=IN').subscribe((res:any)=>{
      this.cityDetails=res.results;
      console.log(this.cityDetails);
    })
  }
  getDetails(location){
      this.selected_city=location;
      this.location=this.airApi.getLocation(`https://api.openaq.org/v1/locations?city=${location}`).subscribe((res:any)=>{
      this.locationDetails=res.results;
      console.log(this.locationDetails);
    });
  }

}
