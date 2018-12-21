import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Routing';
  onClick(){
    alert("click on subscribe button below to view Winners content\n*neglect this if you have already subscribed");
    
  }
  
}
