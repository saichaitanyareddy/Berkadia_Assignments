import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result:string;
  inform:string;
  clicked:boolean=false;
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
  }

  onClickSchedule(){
    this.router.navigate(['schedule']);
  }
  onSubscribe(){
    this.authService.onSubscribe();
    this.result='subscribed';
    this.inform=' able ';
    this.clicked=true;
  }
  onUnsubscribe(){
    this.authService.onUnsubscribe();
    this.result='unsubscribed';
    this.inform=' not be able ';
    this.clicked=true;
  }
}
