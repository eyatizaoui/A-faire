import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-forum-product',
  templateUrl: './forum-product.component.html',
  styleUrls: ['./forum-product.component.css']
})
export class ForumProductComponent implements OnInit {
 product!:Product;
  constructor() { }

  ngOnInit(): void {
    this.product=new Product;
  }

}
