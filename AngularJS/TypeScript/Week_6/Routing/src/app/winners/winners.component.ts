import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css'],
  providers:[AppService]
})
export class WinnersComponent implements OnInit {
  winners=[];
  constructor(private winnersDetails:AppService) { }

  ngOnInit() {
    this.winners=this.winnersDetails.winnersDetails;
  }

}
