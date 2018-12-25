import { Component, OnInit } from '@angular/core';
import { AirService } from '../air.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {
  parameterDetails;
  public parameter;
  constructor(private readonly airApi:AirService) { }

  ngOnInit() {
    this.parameter=this.airApi.getParameter('https://api.openaq.org/v1/parameters').subscribe((res:any)=>{
      this.parameterDetails=res.results;
      console.log(this.parameterDetails);
    });
  }

}
