import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HomeDetailsComponent } from '../home-details/home-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeDetails
  @ViewChild('templateRef',{read:ViewContainerRef}) entry: ViewContainerRef;
  constructor(private readonly resolver:ComponentFactoryResolver) { }

  ngOnInit() {
    this.renderDynamicCompponent();
  }
  renderDynamicCompponent(){
    const dynamic=this.resolver.resolveComponentFactory(HomeDetailsComponent);
    this.homeDetails=this.entry.createComponent(dynamic);
  }

}
