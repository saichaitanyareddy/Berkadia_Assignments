import { Component, OnInit,Input } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-cart-count',
  templateUrl: './cart-count.component.html',
  styleUrls: ['./cart-count.component.css']
})
export class CartCountComponent implements OnInit {
  count=0;
  @Input() itemClick:Subject<void>;
  constructor() {
   }

  ngOnInit() {
    this.itemClick.subscribe(()=>this.incrementValue());
  }
  incrementValue(){
    this.count=this.count+1;

  }
  onRemove(){
    if(this.count>=1)
    {
      this.count=this.count-1;
    }
  }


}
