import { Component, OnInit } from '@angular/core';
import { AirService } from '../air.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {
  public measurements;
  measurementDetails;
  constructor(private readonly airApi:AirService) { }

  ngOnInit() {
    this.measurements=this.airApi.getMeasurement('https://api.openaq.org/v1/measurements').subscribe((res:any)=>{
      this.measurementDetails=res.results;
      console.log(this.measurementDetails);
    });
  }

}
