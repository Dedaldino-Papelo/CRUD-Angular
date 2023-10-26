import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../interface/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];

  constructor(
    private productService: ProductService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct = () => {
    this.productService.read().subscribe((product) => {
      this.products = product
    })
  }

  onDelete(productId: any){
    this.productService.delete(productId)
      .subscribe(() => {
        this.productService.showMessage("Product Deleted")
      })
  }
}
