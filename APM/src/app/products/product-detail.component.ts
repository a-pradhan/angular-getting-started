import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product'

@Component({
  // display component view as part of routing as it won't be nested inside another component
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail'
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router ) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id'); // converts param to numeric type
    this.pageTitle += `: ${id}`;
    this.product =     {
      "productId": id,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }

  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
