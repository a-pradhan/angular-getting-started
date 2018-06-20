import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'

@Component({
  // display component view as part of routing as it won't be nested inside another component
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
