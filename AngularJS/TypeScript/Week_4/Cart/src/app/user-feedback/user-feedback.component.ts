import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css']
})
export class UserFeedbackComponent implements OnInit {
  @Input('feedback') feedback:string;
  constructor() { }

  ngOnInit() {
  }

}
