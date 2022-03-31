import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor() {
    this.product = new Product('Iphone X', 1000, 2);
  }

  ngOnInit() {
  }

}
