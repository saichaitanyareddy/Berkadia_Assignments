import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  itemClick:Subject<void>=new Subject<void>();
  title:string;
  
  
  constructor() { 
    this.title="Flipkart";
  }

  ngOnInit() {
  }
  onAdd(){
    this.itemClick.next();
  }

}
