import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[] = []

  constructor(
    private productService: ProductService
    ){}

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct = () => {
    this.productService.read().subscribe((product) => {
      this.products = product
      console.log(this.products)
    })
  }
}
